import { Module } from '@nestjs/common';
import { TournamentsGroupsService } from './tournaments-groups.service';
import { TournamentsGroupsController } from './tournaments-groups.controller';

@Module({
  controllers: [TournamentsGroupsController],
  providers: [TournamentsGroupsService],
})
export class TournamentsGroupsModule {}
