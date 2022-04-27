import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Itemcontroller } from 'src/controller/item.controller';
import { Itemdt001mb } from 'src/entity/Itemdt001mb';
import { Itemservice } from 'src/service/item.service';

@Module({
    imports: [TypeOrmModule.forFeature([Itemdt001mb])],
    providers: [Itemservice],
    controllers: [Itemcontroller],
})

export class ItemModule { }