import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProdplanDTO } from 'src/dto/Prodplan.dto';
import { Prodplan001mb } from 'src/entity/Prodplan001mb';

import { ProdPlanService } from 'src/service/prod-plan.service';

@Controller('/testandreportstudio/api/prodplan')
export class ProdPlanController {
	constructor(private readonly prodPlanService: ProdPlanService) { }

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prodplanDTO: ProdplanDTO): Promise<Prodplan001mb> {
		return this.prodPlanService.create(prodplanDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() ProdplanDTO: ProdplanDTO): Promise<Prodplan001mb> {
		return this.prodPlanService.update(ProdplanDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prodplan001mb[]> {
		return this.prodPlanService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Prodplan001mb> {
		return this.prodPlanService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.prodPlanService.remove(id);
	}
}
