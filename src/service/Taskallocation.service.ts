import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskallocationDTO } from "src/dto/Taskallocation001wb.dto";
import { Taskallocation001wb } from "src/entity/Taskallocation001wb";
import { Repository } from "typeorm";

@Injectable()
export class TaskallocationService {

    constructor(
        @InjectRepository(Taskallocation001wb) private readonly taskAllocateRepository: Repository<Taskallocation001wb>) {

    }
    async create(taskallocationDTO: TaskallocationDTO): Promise<Taskallocation001wb> {
        const taskallocation001wb = new Taskallocation001wb();
        taskallocation001wb.setProperties(taskallocationDTO);
        return this.taskAllocateRepository.save(taskallocation001wb);
    }
    async update(taskallocationDTO: TaskallocationDTO): Promise<Taskallocation001wb> {
        const taskallocation001wb = new Taskallocation001wb();
        taskallocation001wb.setProperties(taskallocationDTO);
        await this.taskAllocateRepository.update({ curatorId: taskallocation001wb.curatorId }, taskallocation001wb);
        return taskallocation001wb;
    }

    async findAll(): Promise<Taskallocation001wb[]> {
        return await this.taskAllocateRepository.find();
    }

    findOne(curatorId: number): Promise<Taskallocation001wb> {
        return this.taskAllocateRepository.findOne(curatorId);
    }
    async remove(curatorId: number): Promise<void> {
        await this.taskAllocateRepository.delete(curatorId);
    }
}