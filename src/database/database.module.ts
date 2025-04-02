import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/players/entities/player.entity';
import { TournamentsTeam } from 'src/tournaments-teams/entities/tournaments-team.entity';
import { Tournament } from 'src/tournaments/entities/tournament.entity';
import { TournamentsTeamsPlayer } from 'src/tournaments-teams-players/entities/tournaments-teams-player.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: '040tournaments',
          entities: [Player, Tournament, TournamentsTeam, TournamentsTeamsPlayer],
          synchronize: false,
          logging: true
        })]
})
export class DatabaseModule {}
