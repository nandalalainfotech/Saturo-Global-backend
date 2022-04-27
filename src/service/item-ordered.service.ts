import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ReqitemorderDTO } from "src/dto/Reqitemorder.dto";
import { Reqitemorder001mb } from "src/entity/Reqitemorder001mb";

import { Repository } from "typeorm";

@Injectable()
export class ItemOrderedService {
    constructor(@InjectRepository(Reqitemorder001mb) private readonly itemOrderedRepository: Repository<Reqitemorder001mb>) { }

    async create(reqitemorderDTO: ReqitemorderDTO): Promise<Reqitemorder001mb> {
        const reqitemorder001mb = new Reqitemorder001mb();
        reqitemorder001mb.setProperties(reqitemorderDTO);
        return this.itemOrderedRepository.save(reqitemorder001mb);
    }

    async update(reqitemorderDTO: ReqitemorderDTO): Promise<Reqitemorder001mb> {
        const reqitemorder001mb = new Reqitemorder001mb();
        reqitemorder001mb.setProperties(reqitemorderDTO);
        await this.itemOrderedRepository.update({ mrsId: reqitemorder001mb.mrsId }, reqitemorder001mb);
        return reqitemorder001mb;
    }

    async findAll(): Promise<Reqitemorder001mb[]> {
        return this.itemOrderedRepository.find();
    }

    findOne(id: string): Promise<Reqitemorder001mb> {
        return this.itemOrderedRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.itemOrderedRepository.delete(id);
    }
}