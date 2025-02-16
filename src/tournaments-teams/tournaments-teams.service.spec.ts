import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsTeamsService } from './tournaments-teams.service';

describe('TournamentsTeamsService', () => {
  let service: TournamentsTeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TournamentsTeamsService],
    }).compile();

    service = module.get<TournamentsTeamsService>(TournamentsTeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
