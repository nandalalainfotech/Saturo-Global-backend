import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AssayController } from "src/controller/Assay.controller";
import { Assay001wb } from "src/entity/Assay001wb";
import { AssayService } from "src/service/Assay.service";

@Module({
    imports: [TypeOrmModule.forFeature([Assay001wb])],
    providers: [AssayService],
    controllers: [AssayController],
})
export class AssayModule { }