import { TournamentsTeam } from "src/tournaments-teams/entities/tournaments-team.entity";

export class TournamentsGroup {
    tournamentId: number;
    id: number;
    teams: TournamentsTeam[];
}
