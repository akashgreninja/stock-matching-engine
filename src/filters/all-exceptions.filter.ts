import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { Response, Request } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = 500; // default HTTP status code
    let message = 'Internal server error'; // default error message

    if (exception instanceof BadRequestException) {
      response.status(exception.getStatus()).json({
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.getResponse()['message']
          ? exception.getResponse()['message']
          : exception.getResponse(),
      });
      return;
    } else if (exception instanceof HttpException) {
      message = JSON.stringify(exception.getResponse()) || exception.message;
      status = exception.getStatus();
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
    });
  }
}
