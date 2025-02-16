import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsTeamsController } from './tournaments-teams.controller';
import { TournamentsTeamsService } from './tournaments-teams.service';

describe('TournamentsTeamsController', () => {
  let controller: TournamentsTeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournamentsTeamsController],
      providers: [TournamentsTeamsService],
    }).compile();

    controller = module.get<TournamentsTeamsController>(TournamentsTeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
