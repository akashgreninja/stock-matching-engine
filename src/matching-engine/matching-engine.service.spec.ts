import { Test, TestingModule } from '@nestjs/testing';
import { MatchingEngineService } from './matching-engine.service';

describe('MatchingEngineService', () => {
  let service: MatchingEngineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchingEngineService],
    }).compile();

    service = module.get<MatchingEngineService>(MatchingEngineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
