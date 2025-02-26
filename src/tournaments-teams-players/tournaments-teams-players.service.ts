import { Injectable, NotFoundException } from '@nestjs/common';
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

    let tournamentsTeamsPlayer = {
      tournamentId: createTournamentsTeamsPlayerDto.tournamentId,
      teamId: createTournamentsTeamsPlayerDto.teamId,
      id: createTournamentsTeamsPlayerDto.id,
      email: createTournamentsTeamsPlayerDto.email,
      name: createTournamentsTeamsPlayerDto.name,
      surname: createTournamentsTeamsPlayerDto.surname,
      birthDate: createTournamentsTeamsPlayerDto.birthDate
    }

    this.tournamentsTeamsPlayers.push(tournamentsTeamsPlayer);
    return tournamentsTeamsPlayer;
  }

  findAllByTeam(tournamentId: number, teamId: number) {
    const tournamentsTeamsPlayers = this.tournamentsTeamsPlayers.filter(tournamentsTeamsPlayers => tournamentsTeamsPlayers.tournamentId === tournamentId && tournamentsTeamsPlayers.teamId === teamId)
    
    if (tournamentsTeamsPlayers.length === 0) {
      throw new NotFoundException(`There are no players in team with id ${teamId} or in tournament with id ${tournamentId}`);
    }
    
    return tournamentsTeamsPlayers;
  }

  findOne(tournamentId: number, teamId: number, id: number) {
    const tournamentsTeamsPlayers = this.tournamentsTeamsPlayers.find(tournamentsTeamsPlayer => tournamentsTeamsPlayer.tournamentId === tournamentId && tournamentsTeamsPlayer.teamId === teamId && tournamentsTeamsPlayer.id === id);

    if (!tournamentsTeamsPlayers) {
      throw new NotFoundException(`Player with id ${id} not found`);
    }

    return tournamentsTeamsPlayers;
  }

  update(tournamentId: number, teamId: number, id: number, updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto) {
    const tournamentsTeamsPlayersIndex = this.tournamentsTeamsPlayers.findIndex(tournamentsTeamsPlayer => tournamentsTeamsPlayer.tournamentId === tournamentId && tournamentsTeamsPlayer.teamId === teamId && tournamentsTeamsPlayer.id === id);

    if (tournamentsTeamsPlayersIndex === -1) {
      throw new NotFoundException(`Player with id ${id} not found`);
    }

    this.tournamentsTeamsPlayers[tournamentsTeamsPlayersIndex] = {
      ...this.tournamentsTeamsPlayers[tournamentsTeamsPlayersIndex],
      ...updateTournamentsTeamsPlayerDto
    }

    return this.tournamentsTeamsPlayers[tournamentsTeamsPlayersIndex];
  }

  remove(tournamentId: number, teamId: number, id: number) {
    const tournamentsTeamsPlayersIndex = this.tournamentsTeamsPlayers.findIndex(tournamentsTeamsPlayer => tournamentsTeamsPlayer.tournamentId === tournamentId && tournamentsTeamsPlayer.teamId === teamId && tournamentsTeamsPlayer.id === id);
  
    if (tournamentsTeamsPlayersIndex === -1) {
      throw new NotFoundException(`Player with id ${id} not found`);
    }

    return this.tournamentsTeamsPlayers.splice(tournamentsTeamsPlayersIndex, 1);
  }
}
