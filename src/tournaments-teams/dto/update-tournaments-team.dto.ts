import { PartialType } from '@nestjs/mapped-types';
import { CreateTournamentsTeamDto } from './create-tournaments-team.dto';

export class UpdateTournamentsTeamDto extends PartialType(CreateTournamentsTeamDto) {}
