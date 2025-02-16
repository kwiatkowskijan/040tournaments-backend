import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { Tournament } from './entities/tournament.entity';

@Injectable()
export class TournamentsService {

  tournaments: Tournament[] = [
    {
      "id": 1,
      "name": "040Basket Tournament 1.0",
      "startDate": "2024-03-10T23:00:00.000Z",
      "endDate": "2023-09-09",
      "place": "MOSiR Puszczykowo",
      "maxPlayersInTeam": 4
    },
    {
      "id": 2,
      "name": "040Basket Tournament 2.0",
      "startDate": "2025-09-14",
      "endDate": "2025-09-14",
      "place": "Hala widowiskowo-sportowa w Puszczykowie",
      "maxPlayersInTeam": 4
    },
  ]
  maxId: number = 2;

  create(createTournamentDto: CreateTournamentDto) {
    this.maxId++;

    let tournament = {
      id: this.maxId,
      name: createTournamentDto.name,
      startDate: createTournamentDto.startDate,
      endDate: createTournamentDto.endDate,
      place: createTournamentDto.place,
      maxPlayersInTeam: createTournamentDto.maxPlayersInTeam
    }

    this.tournaments.push(tournament);
    return tournament;
  }

  findAll() {
    return this.tournaments;
  }

  findOne(id: number) {
    const tournament = this.tournaments.find(tournament => tournament.id === id);

    if (!tournament) {
      throw new NotFoundException(`Tournament with id ${id} not found`);
    }
    return tournament;
  }

  update(id: number, updateTournamentDto: UpdateTournamentDto) {
    const tournamentIndex = this.tournaments.findIndex(tournament => tournament.id === id);

    if(tournamentIndex === -1) {
      throw new NotFoundException(`Tournament with id ${id} not found`)
    }

    this.tournaments[tournamentIndex] = {
      ...this.tournaments[tournamentIndex],
      ...updateTournamentDto
    }

    return this.tournaments[tournamentIndex];
  }

  remove(id: number) {
    const tournamentIndex = this.tournaments.findIndex(tournament => tournament.id === id);

    if(tournamentIndex === -1) {
      throw new NotFoundException(`Tournament with id ${id} not found`)
    }

    return this.tournaments.splice(tournamentIndex, 1)
  }
}
