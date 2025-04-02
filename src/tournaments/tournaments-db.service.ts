import { TournamentsService } from './tournaments.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { Tournament } from './entities/tournament.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TournamentsDbService implements TournamentsService {

    constructor(@InjectRepository(Tournament) private tournamentRepository: Repository<Tournament>) {}

    async create(createTournamentDto: CreateTournamentDto) {
        return await this.tournamentRepository.save(createTournamentDto);
    }

    async findAll(): Promise<Tournament[] | null> {
        return await this.tournamentRepository.find()
    }

    async findOne(id: number): Promise<Tournament | null> {
        const tournament = await this.tournamentRepository.findOneBy({ id });

        if(tournament === null) {
            throw new NotFoundException(`Tournament with id ${id} dont exists in database`)
        }

        return tournament;
    }

    async update(id: number, updateTournamentDto: UpdateTournamentDto) {
        const tournament = await this.tournamentRepository.findOneBy({ id });

        if(tournament === null) {
            throw new NotFoundException(`Tournament with id ${id} dont exists in database`)
        }

        return this.tournamentRepository.save({ ...tournament, ...updateTournamentDto });
    }

    remove(id: number) {
        return this.tournamentRepository.delete(id);
    }
}
