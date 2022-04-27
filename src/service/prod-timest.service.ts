import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdtimesheetDTO } from 'src/dto/Prodtimesheet.dto';
import { Prodtimesheet001mb } from 'src/entity/Prodtimesheet001mb';

import { Repository } from 'typeorm';

@Injectable()
export class ProdTimeSheetService {
	constructor(@InjectRepository(Prodtimesheet001mb) private readonly prodTimeSheetRepository: Repository<Prodtimesheet001mb>,) { }

	async create(prodtimesheetDTO: ProdtimesheetDTO): Promise<ProdtimesheetDTO> {
		const prodtimesheet001mb = new Prodtimesheet001mb();
		prodtimesheet001mb.setProperties(prodtimesheetDTO);
		return this.prodTimeSheetRepository.save(prodtimesheet001mb);
	}
	async update(prodtimesheetDTO: ProdtimesheetDTO): Promise<ProdtimesheetDTO> {
		const prodtimesheet001mb = new ProdtimesheetDTO();
		prodtimesheet001mb.setProperties(prodtimesheetDTO);
		await this.prodTimeSheetRepository.update({ prtId: prodtimesheet001mb.prtId }, prodtimesheet001mb);
		return prodtimesheet001mb;
	}
	async findAll(): Promise<Prodtimesheet001mb[]> {
		return this.prodTimeSheetRepository.find();
	}

	findOne(id: string): Promise<Prodtimesheet001mb> {
		return this.prodTimeSheetRepository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.prodTimeSheetRepository.delete(id);
	}
}
