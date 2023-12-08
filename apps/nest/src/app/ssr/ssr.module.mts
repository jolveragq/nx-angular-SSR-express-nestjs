import { Module } from '@nestjs/common';
import { SsrController } from './ssr.controller.mjs';

@Module({
  controllers: [SsrController],
})
export class SsrModule {}
