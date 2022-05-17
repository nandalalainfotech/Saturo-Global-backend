import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssayDTO } from "src/dto/Assay.dto";
import { Assay001wb } from "src/entity/Assay001wb";
import { User001mb } from "src/entity/User001mb";
import { Repository } from "typeorm";

@Injectable()
export class AssayService {
    constructor(
        @InjectRepository(User001mb) private readonly userRepository: Repository<User001mb>,
        @InjectRepository(Assay001wb) private readonly assayRepository: Repository<Assay001wb>) {

    }
    async create(assayDTO: AssayDTO): Promise<Assay001wb> {
        const assay001wb = new Assay001wb();
        assay001wb.setProperties(assayDTO);
        return this.assayRepository.save(assay001wb);
    }
    async update(assayDTO: AssayDTO): Promise<Assay001wb> {
        const assay001wb = new Assay001wb();
        assay001wb.setProperties(assayDTO);
        await this.assayRepository.update({assayId: assay001wb.assayId }, assay001wb);
        return assay001wb;
    }

    async findAll(username: any): Promise<Assay001wb[]> {
        return await this.assayRepository.find({relations: ["assayTypeSlno2", "toxiCitySlno2", "routeSlno2", "unitSlno2", "unitedSlno2","ligandSlno2", "ligandSlno2.ligandVersionSlno2"], where: { "insertUser": username }});
    }

    findOne(id: number): Promise<Assay001wb> {
        return this.assayRepository.findOne(id);
    }
    async remove(assayId: number): Promise<void> {
        await this.assayRepository.delete(assayId);
    }
}