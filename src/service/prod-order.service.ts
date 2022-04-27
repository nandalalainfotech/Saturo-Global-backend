import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdorderDTO } from 'src/dto/Prodorder.dto';
import { Prodorder001mb } from 'src/entity/Prodorder001mb';

import { Repository } from 'typeorm';

@Injectable()
export class ProdOrderService {
	constructor(@InjectRepository(Prodorder001mb) private readonly prodorderRepository: Repository<Prodorder001mb>,) { }

	async create(prodorderDTO: ProdorderDTO): Promise<Prodorder001mb> {		
		const prodorder001mb = new Prodorder001mb();
		prodorder001mb.setProperties(prodorderDTO);
		return this.prodorderRepository.save(prodorder001mb);
	}

	async update(prodorderDTO: ProdorderDTO): Promise<Prodorder001mb> {
		const prodorder001mb = new Prodorder001mb();
		prodorder001mb.setProperties(prodorderDTO);
		await this.prodorderRepository.update({ prId: prodorder001mb.prId }, prodorder001mb);
		return prodorder001mb;
	}

	async findAll(): Promise<Prodorder001mb[]> {
		return this.prodorderRepository.find();
	}

	findOne(id: string): Promise<Prodorder001mb> {
		return this.prodorderRepository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.prodorderRepository.delete(id);
	}
}
