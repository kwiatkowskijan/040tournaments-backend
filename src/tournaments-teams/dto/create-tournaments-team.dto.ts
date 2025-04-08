import { ApiProperty } from "@nestjs/swagger";

export class CreateTournamentsTeamDto {
    @ApiProperty()
    tournamentId: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    city: string;
}
