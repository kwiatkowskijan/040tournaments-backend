import { ApiProperty } from "@nestjs/swagger";

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
