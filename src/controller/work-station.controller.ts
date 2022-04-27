import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { WorkstationDTO } from 'src/dto/Workstation.dto';
import { Workstation001mb } from 'src/entity/Workstation001mb.entity';
import { WorkStationService } from 'src/service/work-station.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";


@Controller('/testandreportstudio/api/workstation')
export class WorkStationController {
    constructor(private readonly workStationService: WorkStationService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.workStationService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.workStationService.downloadExcel(request, response);
	}
    
    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() workstationDTO: WorkstationDTO): Promise<Workstation001mb> {
        return this.workStationService.create(workstationDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() workstationDTO: WorkstationDTO): Promise<Workstation001mb> {
        return this.workStationService.update(workstationDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Workstation001mb[]> {
        return this.workStationService.findAll();
    } 

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Workstation001mb> {
        return this.workStationService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.workStationService.remove(id);
    }
}