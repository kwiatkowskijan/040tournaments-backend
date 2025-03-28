import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/players/entities/player.entity';
import { Tournament } from 'src/tournaments/entities/tournament.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: '040tournaments',
          entities: [Player, Tournament],
          synchronize: false,
          logging: true
        })]
})
export class DatabaseModule {}
