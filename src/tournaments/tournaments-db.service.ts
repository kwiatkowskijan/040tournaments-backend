import { TournamentsService } from './tournaments.service';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { Tournament } from './entities/tournament.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetTournamentDto } from './dto/get-tournament.dto';
import { GetPlayerDto } from 'src/players/dto/get-player.dto';
import { Player } from 'src/players/entities/player.entity';
import { PlayersService } from 'src/players/players.service';

@Injectable()
export class TournamentsDbService implements TournamentsService {

    constructor(@InjectRepository(Tournament) private tournamentRepository: Repository<Tournament>,
        @Inject('PlayersService') private readonly playersService: PlayersService) { }

    async create(createTournamentDto: CreateTournamentDto): Promise<GetTournamentDto> {
        const tournament: Tournament = this.mapCreateTournamentDtoToEntity(createTournamentDto);

        const newTournament = await this.tournamentRepository.save(tournament);

        return this.mapTournamentToDto(newTournament);
    }

    async findAll(): Promise<GetTournamentDto[]> {
        const tournamentsDto: GetTournamentDto[] = [];

        const tournaments = await this.tournamentRepository.find()

        if (tournaments === null) {
            throw new NotFoundException(`There are no tournamentes in database`);
        }

        tournaments.forEach((tournament) => {
            tournamentsDto.push(this.mapTournamentToDto(tournament));
        })

        return tournamentsDto;
    }

    async findOne(id: number): Promise<GetTournamentDto> {
        const tournament = await this.tournamentRepository.findOne({ where: { id: id } });

        if (tournament === null) {
            throw new NotFoundException(`Tournament with id ${id} dont exists in database`)
        }

        return this.mapTournamentToDto(tournament);
    }

    async findPlayersInTournament(id: number): Promise<GetPlayerDto[]> {
        const tournament = await this.tournamentRepository.findOne({
            where: { id: id },
            relations: {
                tournamentsTeams: {
                    tournamentsTeamsPlayer: {
                        player: true
                    }
                }
            }
        });

        if (!tournament) {
            throw new NotFoundException(`Tournament with id ${id} does not exist in the database`);
        }

        const players: Player[] = [];

        tournament.tournamentsTeams.forEach(team => {
            team.tournamentsTeamsPlayer.forEach(tournamentsTeamsPlayer => {
                if (tournamentsTeamsPlayer.player) {
                    players.push(tournamentsTeamsPlayer.player);
                }
            });
        });

        const playersDto: GetPlayerDto[] = [];

        players.forEach(player => {
            playersDto.push(this.mapPlayerToDto(player))
        })

        return playersDto;
    }

    async findFreePlayersInTournament(id: number): Promise<GetPlayerDto[]> {
        const players = await this.playersService.findAll();

        const playersInTournament = await this.findPlayersInTournament(id);

        const freePlayers = players.filter(players => !playersInTournament.some(playersInTournament => playersInTournament.id === players.id))

        return freePlayers;
    }

    async update(id: number, updateTournamentDto: UpdateTournamentDto): Promise<GetTournamentDto> {
        const tournament = await this.tournamentRepository.findOne({ where: { id: id } });

        if (tournament === null) {
            throw new NotFoundException(`Tournament with id ${id} dont exists in database`)
        }

        const updatedTournament = await this.tournamentRepository.save({ ...tournament, ...updateTournamentDto });

        return this.mapTournamentToDto(updatedTournament);
    }

    async remove(id: number): Promise<GetTournamentDto> {
        const tournament = await this.tournamentRepository.findOne({ where: { id: id } });

        if (tournament === null) {
            throw new NotFoundException(`Tournament with id ${id} dont exists in database`)
        }

        const deletedTournament = this.mapTournamentToDto(tournament);

        await this.tournamentRepository.delete(id);

        return deletedTournament;
    }

    private mapTournamentToDto(tournament: Tournament): GetTournamentDto {
        return {
            id: tournament.id,
            name: tournament.name,
            startDate: tournament.startDate,
            endDate: tournament.endDate,
            place: tournament.place,
            maxPlayersInTeam: tournament.maxPlayersInTeam
        }
    }

    private mapCreateTournamentDtoToEntity(createTournamentDto: CreateTournamentDto): Tournament {
        return {
            id: 0,
            name: createTournamentDto.name,
            startDate: createTournamentDto.startDate,
            endDate: createTournamentDto.endDate,
            place: createTournamentDto.place,
            maxPlayersInTeam: createTournamentDto.maxPlayersInTeam,
            tournamentsTeams: []
        }
    }

    private mapPlayerToDto(player: Player): GetPlayerDto {
        return {
            id: player.id,
            email: player.email,
            name: player.name,
            surname: player.surname,
            birthDate: player.birthDate,
            height: player.height,
            weight: player.weight
        }
    }
}
