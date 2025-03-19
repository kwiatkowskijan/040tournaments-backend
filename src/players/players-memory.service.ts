import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { PlayersService } from './players.service';

@Injectable()
export class PlayersMemoryService implements PlayersService {

  players: Player[] = [
    {
      "id": 0,
      "email": "kwiatkojan@gmail.com",
      "name": "Jan",
      "surname": "Kwiatkowski",
      "birthDate": "2002-09-19",
      // "height": null,
      // "weight": null,
    },
    {
      "id": 1,
      "name": "Michał",
      "surname": "Kwiatkowski",
      "email": "dupa@dupa.pl",
      "birthDate": "2001-01-11",
      // "height": null,
      // "weight": null,
    }
  ]
  maxId: number = 1;

  create(createPlayerDto: CreatePlayerDto) {
    this.maxId++;

    let player = {
      id: this.maxId,
      email: createPlayerDto.email,
      name: createPlayerDto.name,
      surname: createPlayerDto.surname,
      birthDate: createPlayerDto.birthDate,
      height: null,
      weight: null
    }

    this.players.push(player);
    return player;
  }

  findAll() {
    return this.players;
  }

  findOne(playerId: number) {
    const player = this.players.find(player => player.id === playerId);

    if (!player) {
      throw new NotFoundException(`Tournament with id ${playerId} not found`);
    }
    return player;
  }

  update(playerId: number, updatePlayerDto: UpdatePlayerDto) {
    const playerIndex = this.players.findIndex(player => player.id === playerId);

    if(playerIndex === -1) {
      throw new NotFoundException(`Tournament with id ${playerId} not found`)
    }

    this.players[playerIndex] = {
      ...this.players[playerIndex],
      ...updatePlayerDto
    }

    return this.players[playerIndex];
  }

  remove(playerId: number) {
    const tournamentIndex = this.players.findIndex(players => players.id === playerId);

    if(tournamentIndex === -1) {
      throw new NotFoundException(`Tournament with id ${playerId} not found`)
    }

    return this.players.splice(tournamentIndex, 1)
  }
}
