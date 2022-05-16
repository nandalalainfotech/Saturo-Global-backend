import { Controller, Header, Get, Param, Req, Res, UseGuards } from "@nestjs/common";
var path = require('path');
const fs = require('fs');
import { Response } from "express";
import { ReportsService } from "src/service/Report.service";
import { Request } from "supertest";


@Controller('/testandreportstudio/api/machineReports')
export class ReportsController {

    constructor(private readonly reportsService: ReportsService) { }



    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel( @Req() request: Request, @Res() response: Response) {
        return await this.reportsService.downloadExcel( request, response);
    }
}