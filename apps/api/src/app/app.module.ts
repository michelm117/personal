import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { MailerModule } from '@nestjs-modules/mailer';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'portfolio'),
      exclude: ['/api*'],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MAIL_HOST: Joi.string().required(),
        MAIL_USER: Joi.string().required(),
        MAIL_PASSWORD: Joi.string().required(),
        MAIL_FROM: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST'),
          secure: true,
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASSWORD'),
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
