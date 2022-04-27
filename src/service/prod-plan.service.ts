import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdplanDTO } from 'src/dto/Prodplan.dto';
import { Prodplan001mb } from 'src/entity/Prodplan001mb';

import { Repository } from 'typeorm';

@Injectable()
export class ProdPlanService {
	constructor(@InjectRepository(Prodplan001mb) private readonly prodPlanRepository: Repository<Prodplan001mb>,) { }
	async create(prodplanDTO: ProdplanDTO): Promise<ProdplanDTO> {
		const prodplan001mb = new Prodplan001mb();
		prodplan001mb.setProperties(prodplanDTO);
		return this.prodPlanRepository.save(prodplan001mb);
	}
	async update(prodplanDTO: ProdplanDTO): Promise<ProdplanDTO> {
		const prodplan001mb = new Prodplan001mb();
		prodplan001mb.setProperties(prodplanDTO);
		await this.prodPlanRepository.update({ prplanId: prodplan001mb.prplanId }, prodplan001mb);
		return prodplan001mb;
	}

	async findAll(): Promise<Prodplan001mb[]> {
		return this.prodPlanRepository.find();
	}

	findOne(id: string): Promise<Prodplan001mb> {
		return this.prodPlanRepository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.prodPlanRepository.delete(id);
	}
}
