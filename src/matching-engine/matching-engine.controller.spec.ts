import { Test, TestingModule } from '@nestjs/testing';
import { MatchingEngineController } from './matching-engine.controller';
import { MatchingEngineService } from './matching-engine.service';

describe('MatchingEngineController', () => {
  let controller: MatchingEngineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchingEngineController],
      providers: [MatchingEngineService],
    }).compile();

    controller = module.get<MatchingEngineController>(MatchingEngineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
