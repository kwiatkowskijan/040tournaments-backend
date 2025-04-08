import { ApiProperty } from "@nestjs/swagger";

export class UpdateTournamentsTeamsPlayerDto {
    @ApiProperty()
    teamId: number;

    @ApiProperty()
    playerId: number;

    @ApiProperty()
    number: number;

    @ApiProperty()
    isCaptain: boolean;
}
