import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OperationController } from "src/controller/operation.controller";
import { Operationbom001mb } from "src/entity/Operationbom001mb";

import { OperationService } from "src/service/operation.service";

@Module({
    imports: [TypeOrmModule.forFeature([Operationbom001mb])],
    providers: [OperationService],
    controllers: [OperationController],
})

export class OperationModule {}