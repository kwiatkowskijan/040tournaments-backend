import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTournamentsTeamDto } from './dto/create-tournaments-team.dto';
import { UpdateTournamentsTeamDto } from './dto/update-tournaments-team.dto';
import { TournamentsTeam } from './entities/tournaments-team.entity';
import { TournamentsTeamsService } from './tournaments-teams.service';

@Injectable()
export class TournamentsTeamsDbService implements TournamentsTeamsService {

    constructor(@InjectRepository(TournamentsTeam) private tournamentsTeamsRepository: Repository<TournamentsTeam>) { }

    async create(createTournamentsTeamDto: CreateTournamentsTeamDto) {
        return await this.tournamentsTeamsRepository.save(createTournamentsTeamDto);
    }

    async findAllByTournament(tournamentId: number) {
        return await this.tournamentsTeamsRepository.find({
            where: {
                tournamentId: tournamentId,
            }
        });
    }

    async findOne(id: number) {
        const tournamentsTeam = await this.tournamentsTeamsRepository.findOneBy({ id });

        if (tournamentsTeam === null) {
            throw new NotFoundException(`Team with id ${id} dont exists in database`)
        }

        return tournamentsTeam;
    }

    async update(id: number, updateTournamentsTeamDto: UpdateTournamentsTeamDto) {
        const tournamentsTeam = await this.tournamentsTeamsRepository.findOneBy({ id });

        if (tournamentsTeam === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        return this.tournamentsTeamsRepository.save({ ...tournamentsTeam, ...updateTournamentsTeamDto });
    }

    remove(id: number) {
        return this.tournamentsTeamsRepository.delete(id);
    }
}