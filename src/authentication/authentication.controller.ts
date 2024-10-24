import { Body, Controller, Get, Inject, Post, UseInterceptors } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { IAuthentication } from './interfaces/auth.interfaces';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';
import { AUTHENTICATION_SERVICE } from './authentication.service';
import { Observable } from 'rxjs';

@Controller('authentication')
@UseInterceptors(LoggingInterceptor)
export class AuthenticationController {
  constructor(
    @Inject(AUTHENTICATION_SERVICE) private readonly client: ClientProxy
  ) {}

  @Post()
  login(@Body() auth: IAuthentication){
     console.log('auth', auth);
    // return this.client.send('login', auth);
  }
}
