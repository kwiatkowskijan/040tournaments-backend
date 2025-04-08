import { ApiProperty } from "@nestjs/swagger";
import { TournamentsTeamsPlayer } from "src/tournaments-teams-players/entities/tournaments-teams-player.entity";


export class GetTournamentsTeamDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    tournamentId: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    city: string;
}
