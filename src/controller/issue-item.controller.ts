import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { IssueditemDTO } from 'src/dto/Issueditem.dto';
import { Issueditem001mb } from 'src/entity/Issueditem001mb.entity';
import { IssueItemService } from 'src/service/issue-item.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";


@Controller('/testandreportstudio/api/issueditem')
export class IssueItemController {
    constructor(private readonly issueItemService: IssueItemService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.issueItemService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.issueItemService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() issueditemDTO: IssueditemDTO): Promise<Issueditem001mb> {
        return this.issueItemService.create(issueditemDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() issueditemDTO: IssueditemDTO): Promise<Issueditem001mb> {
        return this.issueItemService.update(issueditemDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Issueditem001mb[]> {
        return this.issueItemService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Issueditem001mb> {
        return this.issueItemService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.issueItemService.remove(id);
    }
}
