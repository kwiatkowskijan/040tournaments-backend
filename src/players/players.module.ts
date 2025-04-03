import { Module } from '@nestjs/common';
// import { PlayersMemoryService } from './players-memory.service';
import { PlayersDbService } from './players-db.service';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [PlayersController],
  providers: [
    {
      provide: 'PlayersService',
      useClass: PlayersDbService
    },
  ]
})
export class PlayersModule {}
