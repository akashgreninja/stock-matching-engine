import { ApiProperty } from '@nestjs/swagger';
import { MSG } from '../../constants';
// import { ApiResponse } from '../../swagger/index';



//This is the typecheck for the /health endpoint

export class GetHealthCheckResponse  {
  @ApiProperty({ example:MSG.HEALTH_CHECK })
  data: string;
}
