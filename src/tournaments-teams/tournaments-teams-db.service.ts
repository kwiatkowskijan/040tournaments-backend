import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTournamentsTeamDto } from './dto/create-tournaments-team.dto';
import { UpdateTournamentsTeamDto } from './dto/update-tournaments-team.dto';
import { TournamentsTeam } from './entities/tournaments-team.entity';
import { TournamentsTeamsService } from './tournaments-teams.service';
import { TournamentsService } from 'src/tournaments/tournaments.service';
import { GetTournamentsTeamDto } from './dto/get-tournaments-team.dto';
import { Tournament } from 'src/tournaments/entities/tournament.entity';

@Injectable()
export class TournamentsTeamsDbService implements TournamentsTeamsService {

    constructor(@InjectRepository(TournamentsTeam) private tournamentsTeamsRepository: Repository<TournamentsTeam>,
        @Inject("TournamentsService") private readonly tournamentsService: TournamentsService) { }

    async create(createTournamentsTeamDto: CreateTournamentsTeamDto): Promise<GetTournamentsTeamDto> {
        const tournament = await this.tournamentsService.findOne(createTournamentsTeamDto.tournamentId);

        const tournamentTeam: TournamentsTeam =
            this.mapCreateTournamentsTeamDtoToEntity(createTournamentsTeamDto, tournament);

        const tournamentsTeam: TournamentsTeam = await this.tournamentsTeamsRepository.save(tournamentTeam);

        return this.mapTournamentsTeamToDto(tournamentsTeam);
    }

    async findAllByTournament(tournamentId: number) {
        const getTournamentsTeamDto: GetTournamentsTeamDto[] = [];

        const tournamentTeam: TournamentsTeam[] = await this.tournamentsTeamsRepository.find({
            relations: { tournament: true },
            where: {
                tournament: { id: tournamentId }
            }
        });

        tournamentTeam.forEach((tournamentsTeam) => {
            getTournamentsTeamDto.push(this.mapTournamentsTeamToDto(tournamentsTeam))
        })

        return getTournamentsTeamDto;
    }

    async findOne(id: number) {
        const tournamentsTeam = await this.tournamentsTeamsRepository.findOne({
            relations: { tournament: true },
            where: {
                id: id,
            }
        });

        if (tournamentsTeam === null) {
            throw new NotFoundException(`Team with id ${id} dont exists in database`)
        }

        const getTournamentsTeamDto = this.mapTournamentsTeamToDto(tournamentsTeam);

        return getTournamentsTeamDto;
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

    private mapTournamentsTeamToDto(tournamentsTeam: TournamentsTeam): GetTournamentsTeamDto {
        return {
            id: tournamentsTeam.id,
            tournamentId: tournamentsTeam.tournament.id,
            name: tournamentsTeam.name,
            city: tournamentsTeam.city,
        }
    }

    private mapCreateTournamentsTeamDtoToEntity(createTournamentsTeamDto: CreateTournamentsTeamDto, tournament: Tournament) {
        return {
            id: 0,
            tournament: tournament,
            tournamentsTeamsPlayer: [],
            name: createTournamentsTeamDto.name,
            city: createTournamentsTeamDto.city
        }
    }
}