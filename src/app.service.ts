import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  home() {
    return 'Welcome to my Movie API';
  }
}
