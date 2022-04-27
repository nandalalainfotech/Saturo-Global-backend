import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProgprodorderDTO } from 'src/dto/Progprodorder.dto';
import { Progprodorder001mb } from 'src/entity/Progprodorder001mb.entity';
import { ProgProdOrderService } from 'src/service/prog-prod-order.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/progprodorder')
export class ProgProdOrderController {
	constructor(private readonly progProdOrderService: ProgProdOrderService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.progProdOrderService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.progProdOrderService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() progprodorderDTO: ProgprodorderDTO): Promise<Progprodorder001mb> {
		return this.progProdOrderService.create(progprodorderDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() progprodorderDTO: ProgprodorderDTO): Promise<Progprodorder001mb> {
		return this.progProdOrderService.update(progprodorderDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Progprodorder001mb[]> {
		return this.progProdOrderService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Progprodorder001mb> {
		return this.progProdOrderService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.progProdOrderService.remove(id);
	}
}
