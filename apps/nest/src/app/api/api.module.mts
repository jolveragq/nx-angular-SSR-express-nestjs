import { Module } from '@nestjs/common';
import { ApiController } from './api.controller.mjs';

@Module({
  controllers: [ApiController],
})
export class ApiModule {}
