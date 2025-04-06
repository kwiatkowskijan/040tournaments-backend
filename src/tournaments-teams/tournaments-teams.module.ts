import { Module } from '@nestjs/common';
import { TournamentsTeamsService } from './tournaments-teams.service';
// import { TournamentsTeamsMemoryService } from './tournaments-teams-memory.service';
import { TournamentsTeamsController } from './tournaments-teams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentsTeam } from './entities/tournaments-team.entity';
import { TournamentsTeamsDbService } from './tournaments-teams-db.service';
import { TournamentsModule } from 'src/tournaments/tournaments.module';

@Module({
  imports: [TypeOrmModule.forFeature([TournamentsTeam]), TournamentsModule],
  controllers: [TournamentsTeamsController],
  providers: [
    {
      provide: 'TournamentsTeamsService',
      useClass: TournamentsTeamsDbService
    },
  ]
})
export class TournamentsTeamsModule { }
