import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProdstockentryDTO } from 'src/dto/Prodstockentry.dto';
import { Prodstockentry001mb } from 'src/entity/Prodstockentry001mb';

import { ProdStockService } from 'src/service/prod-stack.service';

@Controller('/testandreportstudio/api/prodstock')
export class ProdStockController {
	constructor(private readonly prodStockService: ProdStockService) { }

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prodstockentryDTO: ProdstockentryDTO): Promise<Prodstockentry001mb> {
		return this.prodStockService.create(prodstockentryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() prodstockentryDTO: ProdstockentryDTO): Promise<Prodstockentry001mb> {
		return this.prodStockService.update(prodstockentryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prodstockentry001mb[]> {
		return this.prodStockService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Prodstockentry001mb> {
		return this.prodStockService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.prodStockService.remove(id);
	}
}
