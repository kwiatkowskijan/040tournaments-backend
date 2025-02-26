import { PartialType } from '@nestjs/mapped-types';
import { CreateTournamentsTeamsPlayerDto } from './create-tournaments-teams-player.dto';

export class UpdateTournamentsTeamsPlayerDto extends PartialType(CreateTournamentsTeamsPlayerDto) {}
