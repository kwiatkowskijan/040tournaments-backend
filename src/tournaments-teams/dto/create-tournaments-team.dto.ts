import { IsNumber } from "class-validator";

export class CreateTournamentsTeamDto {
    @IsNumber()
    tournamentId: number;
    
    name: string;
    city: string;
}
