import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTournamentsTeamDto } from './dto/create-tournaments-team.dto';
import { UpdateTournamentsTeamDto } from './dto/update-tournaments-team.dto';
import { TournamentsTeam } from './entities/tournaments-team.entity';
import { TournamentsTeamsService } from './tournaments-teams.service';

@Injectable()
export class TournamentsTeamsMemoryService implements TournamentsTeamsService {

  tournamentsTeams: TournamentsTeam[] = [
    {
      "tournamentId": 2,
      "id": 1,
      "name": "Otwieracze",
      "city": "Poznań",
    },
    {
      "tournamentId": 2,
      "id": 2,
      "name": "Team 2",
      "city": "Poznań",
    }
  ]

  maxId: number = 2;

  create(createTournamentsTeamDto: CreateTournamentsTeamDto) {
    this.maxId++;

    let tournamentTeam = {
      tournamentId: createTournamentsTeamDto.tournamentId,
      id: this.maxId,
      name: createTournamentsTeamDto.name,
      city: createTournamentsTeamDto.city
    }

    this.tournamentsTeams.push(tournamentTeam);
    return tournamentTeam;
  }

  findAllByTournament(tournamentId: number): TournamentsTeam[] {
    const tournamentsTeams = this.tournamentsTeams.filter(tournamentsTeam => tournamentsTeam.tournamentId === tournamentId);
    return tournamentsTeams;
  }

  findOne(id: number) {
    const tournamentsTeam = this.tournamentsTeams.find(tournamentTeam => tournamentTeam.id === id);

    if (!tournamentsTeam) {
      throw new NotFoundException(`Tournament with id ${id} not found`);
    }

    return tournamentsTeam;
  }

  update(id: number, updateTournamentsTeamDto: UpdateTournamentsTeamDto) {
    const tournamentTeamIndex = this.tournamentsTeams.findIndex(tournamentTeam => tournamentTeam.id === id);

    if (tournamentTeamIndex === -1) {
      throw new NotFoundException(`Tournament team with id ${id} not found`)
    }

    this.tournamentsTeams[tournamentTeamIndex] = {
      ...this.tournamentsTeams[tournamentTeamIndex],
      ...updateTournamentsTeamDto
    }

    return this.tournamentsTeams[tournamentTeamIndex];
  }

  remove(id: number) {
    const tournamentTeamIndex = this.tournamentsTeams.findIndex(tournamentTeam => tournamentTeam.id === id);

    if (tournamentTeamIndex === -1) {
      throw new NotFoundException(`Tournament team with id ${id} not found`);
    }

    return this.tournamentsTeams.splice(tournamentTeamIndex, 1);
  }
}
