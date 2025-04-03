import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTournamentsTeamsPlayerDto } from './dto/create-tournaments-teams-player.dto';
import { UpdateTournamentsTeamsPlayerDto } from './dto/update-tournaments-teams-player.dto';
import { TournamentsTeamsPlayer } from './entities/tournaments-teams-player.entity';
import { TournamentsTeamsPlayersService } from './tournaments-teams-players.service';
import { Repository } from 'typeorm';

@Injectable()
export class TournamentsTeamsPlayersDbService implements TournamentsTeamsPlayersService {

    constructor(@InjectRepository(TournamentsTeamsPlayer) private tournamentsTeamsPlayerRepository: Repository<TournamentsTeamsPlayer>) { }

    async create(createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto) {
        return await this.tournamentsTeamsPlayerRepository.save(createTournamentsTeamsPlayerDto);
    }

    async findAllByTeam(teamId: number) {
        return await this.tournamentsTeamsPlayerRepository.find({
            where: { teamId: teamId },
            relations: { player: true }
        });
    }

    async findOne(id: number) {
        const player = await this.tournamentsTeamsPlayerRepository.find({
            where: { id: id },
            relations: { player: true }
        });

        if (player === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        return player;
    }

    async update(id: number, updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto) {
        const player = await this.tournamentsTeamsPlayerRepository.findOneBy({ id });

        if (player === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        return this, this.tournamentsTeamsPlayerRepository.save({ ...player, ...updateTournamentsTeamsPlayerDto });
    }

    async remove(id: number) {
        const player = await this.tournamentsTeamsPlayerRepository.findOneBy({ id });

        if (player === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        return this.tournamentsTeamsPlayerRepository.delete(id);
    }
}
