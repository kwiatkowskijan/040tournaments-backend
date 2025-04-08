// import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateTournamentsTeamsPlayerDto } from './dto/create-tournaments-teams-player.dto';
// import { UpdateTournamentsTeamsPlayerDto } from './dto/update-tournaments-teams-player.dto';
// import { TournamentsTeamsPlayer } from './entities/tournaments-teams-player.entity';
// import { TournamentsTeamsPlayersService } from './tournaments-teams-players.service';

// @Injectable()
// export class TournamentsTeamsPlayersMemoryService implements TournamentsTeamsPlayersService {

//   tournamentsTeamsPlayers: TournamentsTeamsPlayer[] = [
//     {
//       "playerId": 2,
//       "teamId": 1,
//       "id": 0,
//       "number": 1,
//       "isCaptain": true
//     },
//     {
//       "playerId": 2,
//       "teamId": 1,
//       "id": 1,
//       "number": 2,
//       "isCaptain": false
//     }
//   ]

//   maxId: number = 1;

//   create(createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto) {
//     this.maxId++;

//     let tournamentsTeamsPlayer = {
//       teamId: createTournamentsTeamsPlayerDto.teamId,
//       playerId: createTournamentsTeamsPlayerDto.playerId,
//       id: this.maxId,
//       number: createTournamentsTeamsPlayerDto.number,
//       isCaptain: createTournamentsTeamsPlayerDto.isCaptain
//     }

//     this.tournamentsTeamsPlayers.push(tournamentsTeamsPlayer);
//     return tournamentsTeamsPlayer;
//   }

//   findAllByTeam(teamId: number) {
//     const tournamentsTeamsPlayers = this.tournamentsTeamsPlayers.filter(tournamentsTeamsPlayers => tournamentsTeamsPlayers.teamId === teamId)

//     if (tournamentsTeamsPlayers.length === 0) {
//       throw new NotFoundException(`There are no players in team with id ${teamId}`);
//     }

//     return tournamentsTeamsPlayers;
//   }

//   findOne(id: number) {
//     const tournamentsTeamsPlayers = this.tournamentsTeamsPlayers.find(tournamentsTeamsPlayer => tournamentsTeamsPlayer.id === id);

//     if (!tournamentsTeamsPlayers) {
//       throw new NotFoundException(`Player with id ${id} not found`);
//     }

//     return tournamentsTeamsPlayers;
//   }

//   update(id: number, updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto) {
//     const tournamentsTeamsPlayersIndex = this.tournamentsTeamsPlayers.findIndex(tournamentsTeamsPlayer => tournamentsTeamsPlayer.id === id);

//     if (tournamentsTeamsPlayersIndex === -1) {
//       throw new NotFoundException(`Player with id ${id} not found`);
//     }

//     this.tournamentsTeamsPlayers[tournamentsTeamsPlayersIndex] = {
//       ...this.tournamentsTeamsPlayers[tournamentsTeamsPlayersIndex],
//       ...updateTournamentsTeamsPlayerDto
//     }

//     return this.tournamentsTeamsPlayers[tournamentsTeamsPlayersIndex];
//   }

//   remove(id: number) {
//     const tournamentsTeamsPlayersIndex = this.tournamentsTeamsPlayers.findIndex(tournamentsTeamsPlayer => tournamentsTeamsPlayer.id === id);

//     if (tournamentsTeamsPlayersIndex === -1) {
//       throw new NotFoundException(`Player with id ${id} not found`);
//     }

//     return this.tournamentsTeamsPlayers.splice(tournamentsTeamsPlayersIndex, 1);
//   }
// }
