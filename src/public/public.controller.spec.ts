import { Test, TestingModule } from '@nestjs/testing';
import { PublicController } from './public.controller';
import {MSG} from "../constants"
describe('PublicController', () => {
  let controller: PublicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicController],
    }).compile();

    controller = module.get<PublicController>(PublicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the health check response', () => {
    const healthCheckResponse = controller.getHealthCheck();
    expect(healthCheckResponse).toEqual(MSG.HEALTH_CHECK);
  });
});