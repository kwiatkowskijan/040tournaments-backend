import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTournamentsTeamsPlayerDto } from './dto/create-tournaments-teams-player.dto';
import { UpdateTournamentsTeamsPlayerDto } from './dto/update-tournaments-teams-player.dto';
import { TournamentsTeamsPlayer } from './entities/tournaments-teams-player.entity';
import { TournamentsTeamsPlayersService } from './tournaments-teams-players.service';
import { Repository } from 'typeorm';

@Injectable()
export class TournamentsTeamsPlayersMemoryService implements TournamentsTeamsPlayersService {

    constructor(@InjectRepository(TournamentsTeamsPlayer) private TournamentsTeamsPlayerRepository: Repository<TournamentsTeamsPlayer>) { }

    create(createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto) {

    }

    findAllByTeam(teamId: number) {

    }

    findOne(id: number) {

    }

    update(id: number, updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto) {

    }

    remove(id: number) {

    }
}
