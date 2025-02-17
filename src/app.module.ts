import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentsModule } from './tournaments/tournaments.module';
import { TournamentsTeamsModule } from './tournaments-teams/tournaments-teams.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [TournamentsModule, TournamentsTeamsModule, PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
