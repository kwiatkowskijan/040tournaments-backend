import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from './create-player.dto';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
    name: string;
    surname: string;
    birthDate: string;
    number: number;
    height?: number;
    weight?: number;
}
