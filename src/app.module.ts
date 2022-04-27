import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { BomTypeModule } from './module/bom-type.module';
import { CompleteOrderModule } from './module/complete-order.module';
import { IssueItemModule } from './module/issue-item.module';
import { ItemStatusModule } from './module/item-status.module';
import { ItemModule } from './module/item.module';
import { ToolsModule } from './module/manu-tool.module';
import { ManufacturesetModule } from './module/manufactureset.module';
import { MaterialModule } from './module/material.module';
import { OpenProdOrderModule } from './module/open-prod-order.module';
import { OperationModule } from './module/operation.module';
import { PersonModule } from './module/person.module';
import { ProdOrderModule } from './module/prod-order.module';
import { ProdPlanModule } from './module/prod-plan.module';
import { ProdStockModule } from './module/prod-stock.module';
import { ProdTimeSheetModule } from './module/prod-time-sheet.module';
import { ProgProdOrderModule } from './module/prog-prod-order.module';
import { RoleModule } from './module/role.module';
import { SystemPropertiesModule } from './module/system-properties.module';
import { UserModule } from './module/user.module';
import { WorkStationModule } from './module/work-station.module';



@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            expandVariables: true,
            envFilePath: ['.env.configuration.dev'],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) =>
            ({
                type: 'mysql',
                synchronize: false,
                host: configService.get<string>('DATABASE_HOST'),
                port: Number(configService.get<string>('DATABASE_PORT')),
                username: configService.get<string>('DATABASE_USER_NAME'),
                password: configService.get<string>('DATABASE_PASSWORD'),
                database: configService.get<string>('DATABASE_NAME'),
                autoLoadEntities: true,
                entities: ['../dist/entity/*.entity.{ts,js}'],
                subscribers: ['../dist/entity/*.entity.{ts,js}'],
                migrations: ['../dist/entity/*.entity.{ts,js}'],
                namingStrategy: new SnakeNamingStrategy(),
            } as TypeOrmModuleOptions),
        }),
        AuthModule,
        MailModule,
        SystemPropertiesModule,
        ProdOrderModule,
        ProdPlanModule,
        ProdStockModule,
        ProdTimeSheetModule,
        BomTypeModule,
        CompleteOrderModule,
        OpenProdOrderModule,
        ItemModule,
        PersonModule,
        RoleModule,
        UserModule,
        MaterialModule,
        ItemStatusModule,
        WorkStationModule,
        OperationModule,
        ToolsModule,
        ManufacturesetModule,
        OpenProdOrderModule,
        IssueItemModule,
        ProgProdOrderModule
    ],
    
      
})
export class AppModule { }
