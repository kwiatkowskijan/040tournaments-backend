import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlayerDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    surname: string;

    @ApiProperty()
    birthDate: string;

    @ApiProperty()
    height?: number;

    @ApiProperty()
    weight?: number;
}
