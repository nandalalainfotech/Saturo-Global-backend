import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssayDTO } from "src/dto/Assay.dto";
import { Assay001wb } from "src/entity/Assay001wb";
import { Repository } from "typeorm";

@Injectable()
export class AssayService {
    constructor(
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
        await this.assayRepository.update({ }, assay001wb);
        return assay001wb;
    }

    async findAll(): Promise<Assay001wb[]> {
        return await this.assayRepository.find({relations: ["assayTypeSlno2", "toxiCitySlno2", "routeSlno2", "unitSlno2", "unitsSlno2", "unitedSlno2","ligandVersionSlno2"]});
    }

    findOne(id: number): Promise<Assay001wb> {
        return this.assayRepository.findOne(id);
    }
    async remove(assayId: number): Promise<void> {
        await this.assayRepository.delete(assayId);
    }
}