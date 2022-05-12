import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LigandDTO } from "src/dto/Ligand.dto";
import { Ligand001wb } from "src/entity/Ligand001wb";
import { Repository } from "typeorm";

@Injectable()
export class LigandService {

    constructor(
        @InjectRepository(Ligand001wb) private readonly ligandRepository: Repository<Ligand001wb>) {

    }
    async create(ligandDTO: LigandDTO): Promise<Ligand001wb> {
        const ligand001wb = new Ligand001wb();
        ligand001wb.setProperties(ligandDTO);
        return this.ligandRepository.save(ligand001wb);
    }
    async update(ligandDTO: LigandDTO): Promise<Ligand001wb> {
        const ligand001wb = new Ligand001wb();
        ligand001wb.setProperties(ligandDTO);
        await this.ligandRepository.update({ ligandId: ligand001wb.ligandId}, ligand001wb);
        return ligand001wb;
    }

    async findAll(): Promise<Ligand001wb[]> {
        return await this.ligandRepository.find({ relations: ["ligandVersionSlno2", "ligandTypeSlno2"] });
    }

    findOne(id: number): Promise<Ligand001wb> {
        return this.ligandRepository.findOne(id);
    }
    async remove(ligandId: number): Promise<void> {
        await this.ligandRepository.delete(ligandId);
    }
}