import { ApiProperty } from "@nestjs/swagger";
import { Player } from "src/players/entities/player.entity";
import { TournamentsTeam } from "src/tournaments-teams/entities/tournaments-team.entity";

export class GetTournamentsTeamsPlayerDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    teamId: number;

    @ApiProperty()
    playerId: number;

    @ApiProperty()
    number: number;

    @ApiProperty()
    isCaptain: boolean;
}