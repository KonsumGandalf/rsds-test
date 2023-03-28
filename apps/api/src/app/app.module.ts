import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PhotoModule } from '@rsds/photo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [ '.docker/.postgres.env' ], // 'apps/api/.local.env', 'apps/api/.env'
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('POSTGRES_HOST'),
                port: +configService.get<number>('POSTGRES_PORT'),
                username: configService.get('POSTGRES_USER'),
                password: configService.get('POSTGRES_PASSWORD'),
                database: configService.get('POSTGRES_DB'),
                autoLoadEntities: true,
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
        PhotoModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
