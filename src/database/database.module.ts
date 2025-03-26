import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/players/entities/player.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: '040tournaments',
          entities: [Player],
          synchronize: false,
          logging: true
        })]
})
export class DatabaseModule {}
