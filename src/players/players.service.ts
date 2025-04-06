import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

export interface PlayersService {

  create(createPlayerDto: CreatePlayerDto);

  findAll();

  findAllWithoutTeamInTournament(tournamentId: number);

  findOne(playerId: number);

  update(playerId: number, updatePlayerDto: UpdatePlayerDto);

  remove(playerId: number);
}
