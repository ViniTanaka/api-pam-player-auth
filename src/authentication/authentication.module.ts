import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({ 
  imports: [ClientsModule.register([{
    name: 'AUTHENTICATION_SERVICE',
    transport: Transport.TCP,
  }])],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
