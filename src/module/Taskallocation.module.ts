import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskAllocationController } from "src/controller/Taskallocation.controller";
import { Taskallocation001wb } from "src/entity/Taskallocation001wb";
import { TaskallocationService } from "src/service/Taskallocation.service";

@Module({
    imports: [TypeOrmModule.forFeature([Taskallocation001wb])],
    providers: [TaskallocationService],
    controllers: [TaskAllocationController],
})
export class TaskallocationModule { }