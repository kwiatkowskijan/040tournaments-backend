import { CreateTournamentsTeamsPlayerDto } from './dto/create-tournaments-teams-player.dto';
import { UpdateTournamentsTeamsPlayerDto } from './dto/update-tournaments-teams-player.dto';

export interface TournamentsTeamsPlayersService {

  create(createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto);

  findAllByTeam(teamId: number);

  findOne(id: number);

  update(id: number, updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto);

  remove(id: number);
}
