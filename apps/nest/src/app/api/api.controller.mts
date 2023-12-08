import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get()
  public index() {
    return { message: 'Welcome to backend!' };
  }
}
