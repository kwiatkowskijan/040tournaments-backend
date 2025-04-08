import { Module } from '@nestjs/common';
import { TournamentsTeamsPlayersDbService } from './tournaments-teams-players-db.service';
// import { TournamentsTeamsPlayersMemoryService } from './tournaments-teams-players-memory.service';
import { TournamentsTeamsDbService } from 'src/tournaments-teams/tournaments-teams-db.service';
import { TournamentsTeamsPlayersController } from './tournaments-teams-players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentsTeamsPlayer } from './entities/tournaments-teams-player.entity';
import { TournamentsTeamsModule } from 'src/tournaments-teams/tournaments-teams.module';
import { PlayersModule } from 'src/players/players.module';

@Module({
  imports: [TypeOrmModule.forFeature([TournamentsTeamsPlayer]), TournamentsTeamsModule, PlayersModule],
  controllers: [TournamentsTeamsPlayersController],
  providers: [
    {
      provide: 'TournamentsTeamsPlayersService',
      useClass: TournamentsTeamsPlayersDbService
    },
  ]
})
export class TournamentsTeamsPlayersModule { }
