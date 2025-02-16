import { Module } from '@nestjs/common';
import { TournamentsTeamsService } from './tournaments-teams.service';
import { TournamentsTeamsController } from './tournaments-teams.controller';

@Module({
  controllers: [TournamentsTeamsController],
  providers: [TournamentsTeamsService],
})
export class TournamentsTeamsModule {}
