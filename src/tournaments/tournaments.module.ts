import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentsService } from './tournaments.service';
// import { TournamentsMemoryService } from './tournaments-memory.service';
import { TournamentsDbService } from './tournaments-db.service';
import { TournamentsController } from './tournaments.controller';
import { Tournament } from './entities/tournament.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament])],
  controllers: [TournamentsController],
  providers: [
    {
      provide: 'TournamentsService',
      useClass: TournamentsDbService
    },
  ],
  exports: ['TournamentsService']
})
export class TournamentsModule { }
