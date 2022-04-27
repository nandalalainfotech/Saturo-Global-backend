import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemStatusController } from "src/controller/item-status.controller";
import { Itemst001mb } from "src/entity/Itemst001mb";

import { ItemStatusService } from "src/service/item-status.service";

@Module({
    imports: [TypeOrmModule.forFeature([Itemst001mb])],
    providers: [ItemStatusService],
    controllers: [ItemStatusController],
})
export class ItemStatusModule {}