import { ApiProperty } from "@nestjs/swagger";

export class GetTournamentDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    startDate: string;

    @ApiProperty()
    endDate: string;

    @ApiProperty()
    place: string;

    @ApiProperty()
    maxPlayersInTeam: number;
}
