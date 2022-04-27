import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Billcontroller } from "src/controller/bill-of-material.controller";
import { Itemdt001mb } from "src/entity/Itemdt001mb";

import { Billservice } from "src/service/bill-of-material.service";

@Module({
    imports: [TypeOrmModule.forFeature([Itemdt001mb])],
    providers: [Billservice],
    controllers: [Billcontroller],
})

export class BillOfMaterialModule { }