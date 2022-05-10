import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GenderDTO } from "src/dto/Gender.dto";
import { Gender001mb } from "src/entity/Gender001mb";
import { Repository } from "typeorm";

@Injectable()
export class GenderService {
   
    constructor(
        @InjectRepository(Gender001mb) private readonly genderRepository: Repository<Gender001mb>) {

    }
    async create(genderDTO: GenderDTO): Promise<Gender001mb> {
        const gender001mb = new Gender001mb();
        gender001mb.setProperties(genderDTO);
        return this.genderRepository.save(gender001mb);
    }
    async update(genderDTO: GenderDTO): Promise<Gender001mb> {
        const gender001mb = new Gender001mb();
        gender001mb.setProperties(genderDTO);
        await this.genderRepository.update({  }, gender001mb);
        return gender001mb;
    }

    async findAll(): Promise<Gender001mb[]> {
        return await this.genderRepository.find();
    }

    findOne(id: number): Promise<Gender001mb> {
        return this.genderRepository.findOne(id);
    }
    async remove(slNo: number): Promise<void> {
        await this.genderRepository.delete(slNo);
    }
}