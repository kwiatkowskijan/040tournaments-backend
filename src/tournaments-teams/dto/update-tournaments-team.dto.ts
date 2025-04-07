import { ApiProperty } from '@nestjs/swagger';

export class UpdateTournamentsTeamDto {
    @ApiProperty()
    tournamentId: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    city: string;
}
