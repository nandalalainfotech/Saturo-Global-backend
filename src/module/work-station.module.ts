import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkStationController } from "src/controller/work-station.controller";
import { Workstation001mb } from "src/entity/Workstation001mb.entity";
import { WorkStationService } from "src/service/work-station.service";

@Module({
    imports: [TypeOrmModule.forFeature([Workstation001mb])],
    providers: [WorkStationService],
    controllers: [WorkStationController],
})
export class WorkStationModule {}