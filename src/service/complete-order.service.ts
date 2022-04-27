import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompprodorderDTO } from 'src/dto/Compprodorder.dto';
import { Compprodorder001mb } from 'src/entity/Compprodorder001mb';

import { Repository } from 'typeorm';



@Injectable()
export class CompleteOrderService {
	 constructor(@InjectRepository(Compprodorder001mb) private readonly compprodorderRepository: Repository<Compprodorder001mb>) { }

	async create(compprodorderDTO: CompprodorderDTO): Promise<Compprodorder001mb> {
		const compprodorder001mb = new Compprodorder001mb();
		compprodorder001mb.setProperties(compprodorderDTO);
		return this.compprodorderRepository.save(compprodorderDTO);
	}

	async update(compprodorderDTO: CompprodorderDTO): Promise<Compprodorder001mb> {
        const compprodorder001mb = new Compprodorder001mb();
		compprodorder001mb.setProperties(compprodorderDTO);
		await this.compprodorderRepository.update({ prodId: compprodorder001mb.prodId }, compprodorder001mb);
		return compprodorder001mb;
	}

	async findAll(): Promise<Compprodorder001mb[]> {
		return this.compprodorderRepository.find();
	}

	findOne(id: string): Promise<Compprodorder001mb> {
		return this.compprodorderRepository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.compprodorderRepository.delete(id);
	}
}
