import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { RealIP } from 'nestjs-real-ip';
import { MessageDto } from './dto/message.dto';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private mailService: MailerService, private configService: ConfigService) {}

  @HttpCode(200)
  @Post('sendEmail')
  async sendEmail(@Body() messageDto: MessageDto, @RealIP() ip: string) {
    await this.mailService.sendMail({
      to: 'marc@michel.lu',
      from: this.configService.get('MAIL_FROM'),
      subject: 'Contact - Portfolio',
      text: `${messageDto.subject}\n\n${messageDto.message}\n\n${messageDto.name} - ${messageDto.email} - ${ip}`,
    });
  }
}
