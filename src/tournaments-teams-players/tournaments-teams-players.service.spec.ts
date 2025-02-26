import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsTeamsPlayersService } from './tournaments-teams-players.service';

describe('TournamentsTeamsPlayersService', () => {
  let service: TournamentsTeamsPlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TournamentsTeamsPlayersService],
    }).compile();

    service = module.get<TournamentsTeamsPlayersService>(TournamentsTeamsPlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
