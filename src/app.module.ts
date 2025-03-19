import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentsModule } from './tournaments/tournaments.module';
import { TournamentsTeamsModule } from './tournaments-teams/tournaments-teams.module';
import { PlayersModule } from './players/players.module';
import { TournamentsTeamsPlayersModule } from './tournaments-teams-players/tournaments-teams-players.module';
// import { TournamentsGroupsResolver } from './tournaments-groups/tournaments-groups.resolver';
import { TournamentsGroupsModule } from './tournaments-groups/tournaments-groups.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './players/entities/player.entity';

@Module({
  imports: [TournamentsModule, TournamentsTeamsModule, PlayersModule, TournamentsTeamsPlayersModule, TournamentsGroupsModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: '040tournaments',
      entities: [Player],
      synchronize: false,
      logging: true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
