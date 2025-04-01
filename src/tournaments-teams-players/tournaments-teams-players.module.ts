import { Module } from '@nestjs/common';
import { TournamentsTeamsPlayersMemoryService } from './tournaments-teams-players-memory.service';
import { TournamentsTeamsPlayersController } from './tournaments-teams-players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentsTeamsPlayer } from './entities/tournaments-teams-player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TournamentsTeamsPlayer])],
  controllers: [TournamentsTeamsPlayersController],
    providers: [
      {
        provide: 'TournamentsTeamsPlayersService',
        useClass: TournamentsTeamsPlayersMemoryService
      },
    ]
})
export class TournamentsTeamsPlayersModule {}
