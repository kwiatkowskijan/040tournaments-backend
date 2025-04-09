import { CreateTournamentDto } from "./dto/create-tournament.dto";
import { UpdateTournamentDto } from "./dto/update-tournament.dto";

export interface TournamentsService {
    create(createPlayerDto: CreateTournamentDto);

    findAll();

    findOne(playerId: number);
    
    findPlayersInTournament(id: number);

    findFreePlayersInTournament(id: number);

    update(playerId: number, updatePlayerDto: UpdateTournamentDto);

    remove(playerId: number);
}