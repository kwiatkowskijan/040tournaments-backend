import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTournamentsTeamsPlayerDto } from './dto/create-tournaments-teams-player.dto';
import { UpdateTournamentsTeamsPlayerDto } from './dto/update-tournaments-teams-player.dto';
import { TournamentsTeamsPlayer } from './entities/tournaments-teams-player.entity';
import { TournamentsTeamsPlayersService } from './tournaments-teams-players.service';
import { TournamentsTeamsService } from 'src/tournaments-teams/tournaments-teams.service';
import { PlayersService } from 'src/players/players.service';
import { Repository } from 'typeorm';
import { GetTournamentsTeamsPlayerDto } from './dto/get-tournaments-teams-player.dto';
import { TournamentsTeam } from 'src/tournaments-teams/entities/tournaments-team.entity';
import { Player } from 'src/players/entities/player.entity';

@Injectable()
export class TournamentsTeamsPlayersDbService implements TournamentsTeamsPlayersService {

    constructor(
        @InjectRepository(TournamentsTeamsPlayer) private tournamentsTeamsPlayerRepository: Repository<TournamentsTeamsPlayer>,
        @Inject("TournamentsTeamsService") private readonly tournamentsTeamsService: TournamentsTeamsService,
        @Inject('PlayersService') private readonly playersService: PlayersService
    ) { }

    async create(createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto): Promise<GetTournamentsTeamsPlayerDto> {
        const tournamentsTeam: TournamentsTeam = await this.tournamentsTeamsService.findOne(createTournamentsTeamsPlayerDto.teamId);
        const player: Player = await this.playersService.findOne(createTournamentsTeamsPlayerDto.playerId);

        const tournamentsTeamsPlayer: TournamentsTeamsPlayer = this.mapCreateTournamentsTeamsPlayerDtoToEntity(createTournamentsTeamsPlayerDto, tournamentsTeam, player);

        const newTournamentsTeamsPlayer: TournamentsTeamsPlayer = await this.tournamentsTeamsPlayerRepository.save(tournamentsTeamsPlayer)

        return await this.mapTournamentsTeamsPlayerToDto(newTournamentsTeamsPlayer);
    }

    async findAllByTeam(teamId: number): Promise<GetTournamentsTeamsPlayerDto[]> {
        const tounramentsTeamsPlayerDtos: GetTournamentsTeamsPlayerDto[] = [];

        const tournamentsTeamsPlayer = await this.tournamentsTeamsPlayerRepository.find({
            where: {
                tournamentsTeam: { id: teamId }
            },
            relations: {
                player: true,
                tournamentsTeam: true
            }
        });

        tournamentsTeamsPlayer.forEach((tournamentsTeamsPlayer) => {
            tounramentsTeamsPlayerDtos.push(this.mapTournamentsTeamsPlayerToDto(tournamentsTeamsPlayer))
        })

        return tounramentsTeamsPlayerDtos;
    }

    async findOne(id: number): Promise<GetTournamentsTeamsPlayerDto> {
        const tournamentsTeamsPlayer = await this.tournamentsTeamsPlayerRepository.findOne({
            where: { id: id },
            relations: {
                player: true,
                tournamentsTeam: true
            }
        });

        if (tournamentsTeamsPlayer === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        return this.mapTournamentsTeamsPlayerToDto(tournamentsTeamsPlayer);
    }

    async update(id: number, updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto): Promise<GetTournamentsTeamsPlayerDto> {
        const tournamentsTeamsPlayer = await this.tournamentsTeamsPlayerRepository.findOne({
            where: { id: id },
            relations: {
                player: true,
                tournamentsTeam: true
            }
        });

        if (tournamentsTeamsPlayer === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        const updatedPlayer = await this.tournamentsTeamsPlayerRepository.save({ ...tournamentsTeamsPlayer, ...updateTournamentsTeamsPlayerDto });

        return this.mapTournamentsTeamsPlayerToDto(updatedPlayer);
    }

    async remove(id: number): Promise<GetTournamentsTeamsPlayerDto> {
        const tournamentsTeamsPlayer = await this.tournamentsTeamsPlayerRepository.findOne({
            where: { id: id },
            relations: {
                player: true,
                tournamentsTeam: true
            }
        });

        if (tournamentsTeamsPlayer === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        const tounramentsTeamsPlayerDto = this.mapTournamentsTeamsPlayerToDto(tournamentsTeamsPlayer);

        await this.tournamentsTeamsPlayerRepository.delete(id);

        return tounramentsTeamsPlayerDto;
    }

    private mapTournamentsTeamsPlayerToDto(tournamentsTeamsPlayer: TournamentsTeamsPlayer): GetTournamentsTeamsPlayerDto {
        return {
            id: tournamentsTeamsPlayer.id,
            teamId: tournamentsTeamsPlayer.tournamentsTeam.id,
            playerId: tournamentsTeamsPlayer.player.id,
            number: tournamentsTeamsPlayer.number,
            isCaptain: tournamentsTeamsPlayer.isCaptain
        }
    }

    private mapCreateTournamentsTeamsPlayerDtoToEntity(createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto, tournamentsTeam: TournamentsTeam, player: Player) {
        return {
            id: 0,
            player: player,
            tournamentsTeam: tournamentsTeam,
            number: createTournamentsTeamsPlayerDto.number,
            isCaptain: createTournamentsTeamsPlayerDto.isCaptain
        }
    }
}
