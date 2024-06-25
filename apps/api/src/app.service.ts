import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Solace Test API | STEPHEN OKYERE';
  }
}
