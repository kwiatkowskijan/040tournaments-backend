import { Injectable } from '@nestjs/common';
import { CreateTournamentsTeamsPlayerDto } from './dto/create-tournaments-teams-player.dto';
import { UpdateTournamentsTeamsPlayerDto } from './dto/update-tournaments-teams-player.dto';
import { TournamentsTeamsPlayer } from './entities/tournaments-teams-player.entity';

@Injectable()
export class TournamentsTeamsPlayersService {

  tournamentsTeamsPlayers: TournamentsTeamsPlayer[] = [
    {
      "tournamentId": 2,
      "teamId": 1,
      "id": 0,
      "email": "kwiatkojan@gmail.com",
      "name": "Jan",
      "surname": "Kwiatkowski",
      "birthDate": "2002-09-19"
    },
    {
      "tournamentId": 2,
      "teamId": 1,
      "id": 1,
      "name": "Michał",
      "surname": "Kwiatkowski",
      "email": "dupa@dupa.pl",
      "birthDate": "2001-01-11"
    }
  ]

  create(createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto) {
    return 'This action adds a new tournamentsTeamsPlayer';
  }

  findAll(teamId: number) {
    const tournamentsTeamsPlayers = this.tournamentsTeamsPlayers.filter(tournamentsTeamsPlayers =>  tournamentsTeamsPlayers.teamId = teamId)
    return tournamentsTeamsPlayers;
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
