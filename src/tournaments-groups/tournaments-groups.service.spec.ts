import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsGroupsService } from './tournaments-groups.service';

describe('TournamentsGroupsService', () => {
  let service: TournamentsGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TournamentsGroupsService],
    }).compile();

    service = module.get<TournamentsGroupsService>(TournamentsGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
