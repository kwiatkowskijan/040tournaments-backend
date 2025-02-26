import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsGroupsController } from './tournaments-groups.controller';
import { TournamentsGroupsService } from './tournaments-groups.service';

describe('TournamentsGroupsController', () => {
  let controller: TournamentsGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournamentsGroupsController],
      providers: [TournamentsGroupsService],
    }).compile();

    controller = module.get<TournamentsGroupsController>(TournamentsGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
