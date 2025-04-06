import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTournamentsTeamDto } from './dto/create-tournaments-team.dto';
import { UpdateTournamentsTeamDto } from './dto/update-tournaments-team.dto';
import { TournamentsTeam } from './entities/tournaments-team.entity';
import { TournamentsTeamsService } from './tournaments-teams.service';
import { TournamentsService } from 'src/tournaments/tournaments.service';

@Injectable()
export class TournamentsTeamsDbService implements TournamentsTeamsService {

    constructor(@InjectRepository(TournamentsTeam) private tournamentsTeamsRepository: Repository<TournamentsTeam>,
        @Inject("TournamentsService") private readonly tournamentsService: TournamentsService) { }

    async create(createTournamentsTeamDto: CreateTournamentsTeamDto) {
        const tournament = await this.tournamentsService.findOne(createTournamentsTeamDto.tournamentId);

        const tournamentTeam: TournamentsTeam = {
            id: 0,
            tournament: tournament,
            name: createTournamentsTeamDto.name,
            city: createTournamentsTeamDto.city
        }

        return await this.tournamentsTeamsRepository.save(tournamentTeam);
    }

    async findAllByTournament(tournamentId: number) {

        return await this.tournamentsTeamsRepository.find({
            relations: { tournament: true },
            where: {
                tournament: { id: tournamentId }
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

    async remove(id: number) {
        const tournamentsTeam = await this.tournamentsTeamsRepository.findOneBy({ id });

        if (tournamentsTeam === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        return this.tournamentsTeamsRepository.delete(id);
    }
}