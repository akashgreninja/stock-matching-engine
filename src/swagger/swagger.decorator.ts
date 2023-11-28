// Import necessary modules and decorators from NestJS and Swagger
import { Type, applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
// import { PaginationQuery } from '../pagination';
import { ApiErrorResponse } from './apiResponses';

// Define a class representing header properties
class Header {
  name: string;
  required: boolean;
  description?: string;
}

// Define a custom decorator function for Swagger
export function CustomSwaggerResponse(options?: {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type?: Type<unknown> | Function | [Function] | string;
  methodType?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  description?: string;
  summary?: string;
  isAuthorizedRoute?: boolean;
  isPagination?: boolean;
  headers?: Header[];
}) {
  // Initialize an empty array to hold Swagger decorators
  const swaggerDecorators = [];

  // Check if 'isAuthorizedRoute' property is not provided, set it to true by default
  if (!options || !options.hasOwnProperty('isAuthorizedRoute')) {
    options = { ...options, isAuthorizedRoute: true };
  }

  // If 'description' or 'summary' exists, add ApiOperation decorator to swaggerDecorators
  if (options?.description || options?.summary) {
    swaggerDecorators.push(
      ApiOperation({
        description: options?.description,
        summary: options?.summary,
      }),
    );
  }

  // Based on 'type' and 'methodType', add ApiOkResponse or ApiCreatedResponse decorator to swaggerDecorators
  if (options?.type && options?.methodType !== 'POST') {
    swaggerDecorators.push(ApiOkResponse({ type: options.type }));
  } else if (options?.type && options?.methodType === 'POST') {
    swaggerDecorators.push(ApiCreatedResponse({ type: options.type }));
  }

  // If 'isPagination' exists, add ApiQuery decorator with PaginationQuery type to swaggerDecorators
//   if (options?.isPagination) {
//     swaggerDecorators.push(ApiQuery({ type: PaginationQuery }));
//   }

  // If 'isAuthorizedRoute' is true, add ApiBearerAuth decorator to swaggerDecorators
  if (options?.isAuthorizedRoute) {
    swaggerDecorators.push(ApiBearerAuth());
  }

  // Always add ApiResponse decorator to handle 500 error response with ApiErrorResponse type
  swaggerDecorators.push(
    ApiResponse({
      status: 500,
      type: ApiErrorResponse,
    }),
  );

  // Return the result of applying all generated Swagger decorators to the endpoint or method
  return applyDecorators(...swaggerDecorators);
}
