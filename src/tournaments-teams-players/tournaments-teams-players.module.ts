import { Module } from '@nestjs/common';
import { TournamentsTeamsPlayersService } from './tournaments-teams-players.service';
import { TournamentsTeamsPlayersController } from './tournaments-teams-players.controller';

@Module({
  controllers: [TournamentsTeamsPlayersController],
  providers: [TournamentsTeamsPlayersService],
})
export class TournamentsTeamsPlayersModule {}
