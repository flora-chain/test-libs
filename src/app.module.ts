import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsModule } from '@app/sms';

@Module({
  imports: [SmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
