import { TournamentsService } from './tournaments.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { Tournament } from './entities/tournament.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetTournamentDto } from './dto/get-tournament.dto';

@Injectable()
export class TournamentsDbService implements TournamentsService {

    constructor(@InjectRepository(Tournament) private tournamentRepository: Repository<Tournament>) { }

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
}
