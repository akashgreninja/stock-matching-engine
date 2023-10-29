import { Controller } from '@nestjs/common';
import { MatchingEngineService } from './matching-engine.service';

@Controller('matching-engine')
export class MatchingEngineController {
  constructor(private readonly matchingEngineService: MatchingEngineService) {}
}
