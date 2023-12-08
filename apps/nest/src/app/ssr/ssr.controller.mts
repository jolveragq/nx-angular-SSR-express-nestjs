import { Controller, Get } from '@nestjs/common';
import path from 'path';

@Controller(['*'])
export class SsrController {
  @Get('!*.*')
  public async render() {
    const serverPath = path.resolve('dist/apps/frontend/server/server.mjs');
    const { createAngularSSR } = await import(serverPath);
    console.info('SERVER SIDE RENDER!!');
    const result = await createAngularSSR(
      false,
      'localhost',
      // eslint-disable-next-line no-undef
      process.env.PORT || 3333,
      ''
    );
    return result.html;
  }
}
