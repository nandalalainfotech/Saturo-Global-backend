import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProdtimesheetDTO } from 'src/dto/Prodtimesheet.dto';
import { Prodtimesheet001mb } from 'src/entity/Prodtimesheet001mb';

import { ProdTimeSheetService } from 'src/service/prod-timest.service';

@Controller('/testandreportstudio/api/prodtimesheet')
export class ProdTimeSheetController {
	constructor(private readonly prodTimeSheetService: ProdTimeSheetService) { }

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prodtimesheetDTO: ProdtimesheetDTO): Promise<Prodtimesheet001mb> {
		return this.prodTimeSheetService.create(prodtimesheetDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() prodtimesheetDTO: ProdtimesheetDTO): Promise<Prodtimesheet001mb> {
		return this.prodTimeSheetService.update(prodtimesheetDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prodtimesheet001mb[]> {
		return this.prodTimeSheetService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Prodtimesheet001mb> {
		return this.prodTimeSheetService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.prodTimeSheetService.remove(id);
	}
}
