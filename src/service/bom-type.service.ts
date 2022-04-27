import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BomtypeDTO } from 'src/dto/Bomtype.dto';
import { Bomtype001mb } from 'src/entity/Bomtype001mb';

import { Repository } from 'typeorm';


@Injectable()
export class BomTypeService {
	 constructor(@InjectRepository(Bomtype001mb) private readonly bomtypeRepository: Repository<Bomtype001mb>) { }

	async create(bomtypeDTO: BomtypeDTO): Promise<Bomtype001mb> {
		const bomtype001mb = new Bomtype001mb();
		bomtype001mb.setProperties(bomtypeDTO);
		return this.bomtypeRepository.save(bomtype001mb);
	}

	async update(bomtypeDTO: BomtypeDTO): Promise<Bomtype001mb> {
        const bomtype001mb = new Bomtype001mb();
        bomtype001mb.setProperties(bomtypeDTO);
		await this.bomtypeRepository.update({ bomId: bomtype001mb.bomId }, bomtype001mb);
		return bomtype001mb;
	}

	async findAll(): Promise<Bomtype001mb[]> {
		return this.bomtypeRepository.find();
	}

	findOne(id: string): Promise<Bomtype001mb> {
		return this.bomtypeRepository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.bomtypeRepository.delete(id);
	}
}
