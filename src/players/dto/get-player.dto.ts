import { ApiProperty } from '@nestjs/swagger';

export class GetPlayerDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    email: string;

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
