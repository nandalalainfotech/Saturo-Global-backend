import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import multer from "multer";

import { TaskallocationDTO } from "src/dto/Taskallocation001wb.dto";
import { Taskallocation001wb } from "src/entity/Taskallocation001wb";
import { Repository } from "typeorm";
var fs = require('fs');
const Excel = require('exceljs');
const reader = require('xlsx');

@Injectable()
export class TaskallocationService {

    constructor(
        @InjectRepository(Taskallocation001wb) private readonly taskAllocateRepository: Repository<Taskallocation001wb>) {

    }
    async create(file: any, taskallocationDTO: TaskallocationDTO): Promise<Taskallocation001wb[]> {
        // taskallocation001wb.setProperties(taskallocationDTO);
        this.taskAllocateRepository.clear();

        fs.writeFile('helloworld.xlsx', file.buffer, function (err) {
            if (err) return console.log(err);

        });

        const file2 = reader.readFile("helloworld.xlsx")
        const sheet1 = reader.utils.sheet_to_json(file2.Sheets[file2.SheetNames[0]]);
        let sheet = JSON.parse(JSON.stringify(sheet1).replace(/\s(?=\w+":)/g, ""));
        // console.log("sheet----------->>>>", sheet);

        let taskallocation001wbs: Taskallocation001wb[] = [];
        for (let i = 0; i < sheet.length; i++) {
            const taskallocation001wb = new Taskallocation001wb();
            taskallocation001wb.curatorId = i + 1;
            taskallocation001wb.curatorName = sheet[i].CURATORNAME;
            taskallocation001wb.cbatchNo = "B1";
            taskallocation001wb.curatorTanNo = sheet[i].TANNUMBER;
            taskallocation001wb.curatorAllocateDate = new Date();
            taskallocation001wb.reviewerName = sheet[i].REVIEWERNAME
            taskallocation001wb.rbatchNo = "B1";
            taskallocation001wb.reviewerTanNo = sheet[i].TANNUMBER_1;
            taskallocation001wb.filename = "task allocation";
            taskallocation001wb.reviewerAllocateDate = new Date();
            taskallocation001wb.insertUser = taskallocationDTO.insertUser;
            taskallocation001wb.insertDatetime = taskallocationDTO.insertDatetime;

            this.taskAllocateRepository.save(taskallocation001wb);
            taskallocation001wbs.push(taskallocation001wb);
            // console.log("taskallocation001wb", taskallocation001wb);
        }

        return taskallocation001wbs;

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