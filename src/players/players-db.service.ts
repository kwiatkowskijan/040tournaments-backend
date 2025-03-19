import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { PlayersService } from './players.service';
import { Repository } from 'typeorm';

@Injectable()
export class PlayersDbService implements PlayersService {

    constructor(
        @InjectRepository(Player)
        private playerRepository: Repository<Player>
    ) {}

    create(createPlayerDto: CreatePlayerDto) {

    }

    findAll(): Promise<Player[] | null> {
        return this.playerRepository.find();
    }

    findOne(id: number): Promise<Player | null> {
        return this.playerRepository.findOneBy({ id });
    }

    update(id: number, updatePlayerDto: UpdatePlayerDto) {
        const player = this.playerRepository.findOneBy({ id });
        return this.playerRepository.save({ player, ...updatePlayerDto });
    }

    remove(id: number) {

    }
}
