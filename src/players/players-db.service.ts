import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { PlayersService } from './players.service';
import { Repository } from 'typeorm';

@Injectable()
export class PlayersDbService implements PlayersService {

    constructor(@InjectRepository(Player) private playerRepository: Repository<Player>) { }

    async create(createPlayerDto: CreatePlayerDto) {
        return await this.playerRepository.save(createPlayerDto);
    }

    async findAll(): Promise<Player[] | null> {
        return await this.playerRepository.find();
    }

    async findOne(id: number): Promise<Player | null> {
        const player = await this.playerRepository.findOneBy({ id });

        if(player === null) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        return player;
    }

    async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
        const player = await this.playerRepository.findOneBy({ id });

        if(player === null ) {
            throw new NotFoundException(`Player with id ${id} dont exists in database`)
        }

        return this.playerRepository.save({ ...player, ...updatePlayerDto });
    }

    async remove(id: number) {
        return this.playerRepository.delete(id);
    }
}