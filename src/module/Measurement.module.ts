import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MeasurementController } from "src/controller/Measurement.controller";
import { Measurement001wb } from "src/entity/Measurement001wb";
import { MeasurementService } from "src/service/Measurement.service";

@Module({
    imports: [TypeOrmModule.forFeature([Measurement001wb])],
    providers: [MeasurementService],
    controllers: [MeasurementController],
})
export class MeasurementModule { }