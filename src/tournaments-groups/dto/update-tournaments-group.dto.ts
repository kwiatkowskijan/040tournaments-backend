import { PartialType } from '@nestjs/mapped-types';
import { CreateTournamentsGroupDto } from './create-tournaments-group.dto';

export class UpdateTournamentsGroupDto extends PartialType(CreateTournamentsGroupDto) {}
