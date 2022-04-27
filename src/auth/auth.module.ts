import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controller/auth.controller';
import { User001mb } from 'src/entity/User001mb';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './services/auth.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User001mb]),
        JwtModule.registerAsync({
            imports: [ConfigModule], // Missing this
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: { expiresIn: '5000s' }
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController]

})

export class AuthModule { }