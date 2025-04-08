import { ApiProperty } from "@nestjs/swagger";
import { TournamentsTeamsPlayer } from "src/tournaments-teams-players/entities/tournaments-teams-player.entity";
import { Exclude } from "class-transformer";

export class GetTournamentsTeamDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    tournamentId: number;

    @ApiProperty()
    name: string;

    @Exclude()
    @ApiProperty()
    city: string;
}
