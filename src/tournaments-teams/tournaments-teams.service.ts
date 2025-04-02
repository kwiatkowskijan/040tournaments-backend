import { CreateTournamentsTeamDto } from './dto/create-tournaments-team.dto';
import { UpdateTournamentsTeamDto } from './dto/update-tournaments-team.dto';

export interface TournamentsTeamsService {
  create(createTournamentsTeamDto: CreateTournamentsTeamDto);

  findAllByTournament(tournamentId: number);

  findOne(id: number);

  update(id: number, updateTournamentsTeamDto: UpdateTournamentsTeamDto);

  remove(id: number);
}
