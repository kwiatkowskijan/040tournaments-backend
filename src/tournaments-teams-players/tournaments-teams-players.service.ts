import { Injectable } from '@nestjs/common';
import { CreateTournamentsTeamsPlayerDto } from './dto/create-tournaments-teams-player.dto';
import { UpdateTournamentsTeamsPlayerDto } from './dto/update-tournaments-teams-player.dto';

@Injectable()
export class TournamentsTeamsPlayersService {
  create(createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto) {
    return 'This action adds a new tournamentsTeamsPlayer';
  }

  findAll() {
    return `This action returns all tournamentsTeamsPlayers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tournamentsTeamsPlayer`;
  }

  update(id: number, updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto) {
    return `This action updates a #${id} tournamentsTeamsPlayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} tournamentsTeamsPlayer`;
  }
}
