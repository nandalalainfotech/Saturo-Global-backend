import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ManufacturesetDTO } from "src/dto/Manufactureset.dto";

import { ManufactureSetService } from "src/service/manufacture-set.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";
import { Manufactureset001mb } from "src/entity/Manufactureset001mb";

@Controller('/testandreportstudio/api/setup')
export class ManufactureSetController {
    constructor(private readonly manufacturesetService: ManufactureSetService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.manufacturesetService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.manufacturesetService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() manufacturesetDTO: ManufacturesetDTO): Promise<Manufactureset001mb> {
        return this.manufacturesetService.create(manufacturesetDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() manufacturesetDTO: ManufacturesetDTO): Promise<Manufactureset001mb> {
        return this.manufacturesetService.create(manufacturesetDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
	findAll(): Promise<Manufactureset001mb[]> {
		return this.manufacturesetService.findAll();
	}

    @UseGuards(JwtAuthGuard)
    @Get(':id')
	findOne(@Param('id') id: string): Promise<Manufactureset001mb> {
		return this.manufacturesetService.findOne(id);
	}

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.manufacturesetService.remove(id);
	}
}