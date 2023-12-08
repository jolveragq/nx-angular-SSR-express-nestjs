import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SsrModule } from './ssr/ssr.module.mjs';
import { ApiModule } from './api/api.module.mjs';
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = join(serverDistFolder, '../../../frontend/browser');
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: browserDistFolder,
    }),
    ApiModule,
    SsrModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
