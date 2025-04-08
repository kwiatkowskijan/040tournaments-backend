import { ApiProperty } from "@nestjs/swagger";

export class CreateTournamentsTeamsPlayerDto {
    @ApiProperty()
    teamId: number;

    @ApiProperty()
    playerId: number;

    @ApiProperty()
    number: number;

    @ApiProperty()
    isCaptain: boolean;
}
