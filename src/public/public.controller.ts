import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CustomSwaggerResponse } from '../swagger';

import { GetHealthCheckResponse } from './dto';
import {MSG} from "../constants"

@Controller('public')
export class PublicController {
  @Get('health')
  @CustomSwaggerResponse({
    type: GetHealthCheckResponse,
    isAuthorizedRoute: false,
  })
  getHealthCheck() {
    return MSG.HEALTH_CHECK;
  }
}
