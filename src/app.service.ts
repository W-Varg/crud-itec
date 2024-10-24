import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {
    console.log('app service');
  }
  getHello(): string {
    return (
      'la variable lecturado es: ' + this.configService.get('database.user')
    );
  }
}
