import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { PlayersService } from './players.service';
import { Repository } from 'typeorm';
import { GetPlayerDto } from './dto/get-player.dto';

@Injectable()
export class PlayersDbService implements PlayersService {

    constructor(@InjectRepository(Player) private playerRepository: Repository<Player>) { }

    async create(createPlayerDto: CreatePlayerDto): Promise<GetPlayerDto> {
        const player: Player = this.mapCreatePlayerDtoToEntity(createPlayerDto);

        const newPlayer = await this.playerRepository.save(player);

        return this.mapPlayerToDto(newPlayer);
    }

    async findAll(): Promise<GetPlayerDto[]> {
        const playersDtos: GetPlayerDto[] = [];

        const players = await this.playerRepository.find()

        if (players === null) {
            throw new NotFoundException(`There are no players in database`);
        }

        players.forEach((player) => {
            playersDtos.push(this.mapPlayerToDto(player));
        })

        return playersDtos;
    }

    async findOne(id: number): Promise<GetPlayerDto> {
        const player = await this.playerRepository.findOne({ where: { id: id } });

        if (player === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        return this.mapPlayerToDto(player);
    }

    findAllWithoutTeamInTournament(tournamentId: number) {
        throw new Error('Method not implemented.');
    }

    async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<GetPlayerDto> {
        const player = await this.playerRepository.findOneBy({ id });

        if (player === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        const updatedPlayer = await this.playerRepository.save({ ...player, ...updatePlayerDto });

        return this.mapPlayerToDto(updatedPlayer);
    }

    async remove(id: number) {
        const player = await this.playerRepository.findOne({ where: { id: id } });

        if (player === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        const deletedPlayer = this.mapPlayerToDto(player);

        await this.playerRepository.delete(id);

        return deletedPlayer;
    }

    private mapPlayerToDto(player: Player): GetPlayerDto {
        return {
            id: player.id,
            email: player.email,
            name: player.name,
            surname: player.surname,
            birthDate: player.birthDate,
            height: player.height,
            weight: player.weight
        }
    }

    private mapCreatePlayerDtoToEntity(createPlayerDto: CreatePlayerDto): Player {
        return {
            id: 0,
            email: createPlayerDto.email,
            name: createPlayerDto.name,
            surname: createPlayerDto.surname,
            birthDate: createPlayerDto.birthDate,
            height: createPlayerDto.height,
            weight: createPlayerDto.weight,
            tournamentTeamPlayers: []
        }
    }
}