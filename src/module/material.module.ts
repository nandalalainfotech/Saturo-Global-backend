import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Materialcontroller } from 'src/controller/material.controller';
import { Itemdt001mb } from 'src/entity/Itemdt001mb';
import { Materialservice } from 'src/service/material.service';



@Module({
    imports: [TypeOrmModule.forFeature([Itemdt001mb])],
    providers: [Materialservice],
    controllers: [Materialcontroller],
})

export class MaterialModule { }