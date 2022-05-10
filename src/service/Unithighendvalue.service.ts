import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UnitHighEndValueDTO } from "src/dto/Unithighendvalue.dto";
import { Unithighendvalue001mb } from "src/entity/Unithighendvalue001mb";
import { Repository } from "typeorm";

@Injectable()
export class UnitHighEndValueService {

    constructor(
        @InjectRepository(Unithighendvalue001mb) private readonly unitHighEndValueRepository: Repository<Unithighendvalue001mb>) {

    }
    async create(unitHighEndValueDTO: UnitHighEndValueDTO): Promise<Unithighendvalue001mb> {
        const unithighendvalue001mb = new Unithighendvalue001mb();
        unithighendvalue001mb.setProperties(unitHighEndValueDTO);
        return this.unitHighEndValueRepository.save(unithighendvalue001mb);
    }
    async update(unitHighEndValueDTO: UnitHighEndValueDTO): Promise<Unithighendvalue001mb> {
        const unithighendvalue001mb = new Unithighendvalue001mb();
        unithighendvalue001mb.setProperties(unitHighEndValueDTO);
        await this.unitHighEndValueRepository.update({ }, unithighendvalue001mb);
        return unithighendvalue001mb;
    }

    async findAll(): Promise<Unithighendvalue001mb[]> {
        return await this.unitHighEndValueRepository.find();
    }

    findOne(id: number): Promise<Unithighendvalue001mb> {
        return this.unitHighEndValueRepository.findOne(id);
    }
    async remove(slNo: number): Promise<void> {
        await this.unitHighEndValueRepository.delete(slNo);
    }
}