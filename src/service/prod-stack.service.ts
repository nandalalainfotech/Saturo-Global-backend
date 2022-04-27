import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdstockentryDTO } from 'src/dto/Prodstockentry.dto';
import { Prodstockentry001mb } from 'src/entity/Prodstockentry001mb';

import { Repository } from 'typeorm';

@Injectable()
export class ProdStockService {
	constructor(@InjectRepository(Prodstockentry001mb) private readonly prodstockRepository: Repository<Prodstockentry001mb>,) { }
	async create(prodstockentryDTO: ProdstockentryDTO): Promise<ProdstockentryDTO> {
		const prodstockentry001mb = new ProdstockentryDTO();
		prodstockentry001mb.setProperties(prodstockentryDTO);
		return this.prodstockRepository.save(prodstockentry001mb);
	}
	async update(prodstockentryDTO: ProdstockentryDTO): Promise<Prodstockentry001mb> {
		const prodstockentry001mb = new Prodstockentry001mb();
		prodstockentry001mb.setProperties(prodstockentryDTO);
		await this.prodstockRepository.update({ prstockId: prodstockentry001mb.prstockId }, prodstockentry001mb);
		return prodstockentry001mb;
	}

	async findAll(): Promise<Prodstockentry001mb[]> {
		return this.prodstockRepository.find();
	}

	findOne(id: string): Promise<Prodstockentry001mb> {
		return this.prodstockRepository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.prodstockRepository.delete(id);
	}
}
