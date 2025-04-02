export class CreatePlayerDto {
    email: string;
    name: string;
    surname: string;
    birthDate: string;
    number: number;
    height?: number;
    weight?: number;
}
