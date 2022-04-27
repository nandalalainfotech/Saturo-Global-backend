import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProdorderDTO } from 'src/dto/Prodorder.dto';
import { Prodorder001mb } from 'src/entity/Prodorder001mb';

import { ProdOrderService } from 'src/service/prod-order.service';

@Controller('/testandreportstudio/api/prodorder')
export class ProdOrderController {
	constructor(private readonly prodOrderService: ProdOrderService) { }

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prodorderDTO: ProdorderDTO): Promise<Prodorder001mb> {
		return this.prodOrderService.create(prodorderDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() prodorderDTO: ProdorderDTO): Promise<Prodorder001mb> {
		return this.prodOrderService.update(prodorderDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prodorder001mb[]> {
		return this.prodOrderService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Prodorder001mb> {
		return this.prodOrderService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.prodOrderService.remove(id);
	}
}
