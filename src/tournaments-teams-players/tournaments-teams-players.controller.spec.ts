import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsTeamsPlayersController } from './tournaments-teams-players.controller';
import { TournamentsTeamsPlayersService } from './tournaments-teams-players.service';

describe('TournamentsTeamsPlayersController', () => {
  let controller: TournamentsTeamsPlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournamentsTeamsPlayersController],
      providers: [TournamentsTeamsPlayersService],
    }).compile();

    controller = module.get<TournamentsTeamsPlayersController>(TournamentsTeamsPlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
