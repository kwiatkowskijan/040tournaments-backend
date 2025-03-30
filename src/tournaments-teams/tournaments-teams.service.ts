import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTournamentsTeamDto } from './dto/create-tournaments-team.dto';
import { UpdateTournamentsTeamDto } from './dto/update-tournaments-team.dto';
import { TournamentsTeam } from './entities/tournaments-team.entity';

export interface TournamentsTeamsService {
  create(createTournamentsTeamDto: CreateTournamentsTeamDto);

  findAllByTournament(tournamentId: number);

  findOne(id: number);

  update(id: number, updateTournamentsTeamDto: UpdateTournamentsTeamDto);

  remove(id: number);
}
