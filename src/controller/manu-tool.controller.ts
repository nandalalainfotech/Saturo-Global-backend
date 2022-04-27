import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ItemdtDTO } from "src/dto/Itemdt.dto";

import { Toolservice } from "src/service/manu-tool.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";
import { Itemdt001mb } from "src/entity/Itemdt001mb";

@Controller('/testandreportstudio/api/tools')

export class Toolcontroller {

    constructor(private readonly toolservice: Toolservice) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.toolservice.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.toolservice.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post('save')
    create(@Body() itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        return this.toolservice.create(itemdtDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Put('update')
    update(@Body() itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        return this.toolservice.create(itemdtDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Itemdt001mb[]> {
        return this.toolservice.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Itemdt001mb> {
        return this.toolservice.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.toolservice.remove(id);
    }
}