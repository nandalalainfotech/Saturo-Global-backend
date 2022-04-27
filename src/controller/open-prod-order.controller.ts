import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OpenprodorderDTO } from 'src/dto/Openprodorder.dto';

import { OpenProdOrderService } from 'src/service/open-prod-order.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";
import { Openprodorder001mb } from 'src/entity/Openprodorder001mb';

@Controller('/testandreportstudio/api/openprodorder')
export class OpenProdOrderController {
	constructor(private readonly openProdOrderService: OpenProdOrderService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.openProdOrderService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.openProdOrderService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() openprodorderDTO: OpenprodorderDTO): Promise<Openprodorder001mb> {
		return this.openProdOrderService.create(openprodorderDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() openprodorderDTO: OpenprodorderDTO): Promise<Openprodorder001mb> {
		return this.openProdOrderService.update(openprodorderDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Openprodorder001mb[]> {
		return this.openProdOrderService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Openprodorder001mb> {
		return this.openProdOrderService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.openProdOrderService.remove(id);
	}
}
