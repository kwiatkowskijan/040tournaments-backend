import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentsModule } from './tournaments/tournaments.module';
import { TournamentsTeamsModule } from './tournaments-teams/tournaments-teams.module';
import { PlayersModule } from './players/players.module';
import { TournamentsTeamsPlayersModule } from './tournaments-teams-players/tournaments-teams-players.module';
// import { TournamentsGroupsResolver } from './tournaments-groups/tournaments-groups.resolver';
import { TournamentsGroupsModule } from './tournaments-groups/tournaments-groups.module';

@Module({
  imports: [TournamentsModule, TournamentsTeamsModule, PlayersModule, TournamentsTeamsPlayersModule, TournamentsGroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
