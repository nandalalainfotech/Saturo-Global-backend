import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import { Assay001wb } from "src/entity/Assay001wb";
import { Ligand001wb } from "src/entity/Ligand001wb";
import { Measurement001wb } from "src/entity/Measurement001wb";

import { Request } from "supertest";
import { Repository } from "typeorm";
var path = require('path');
var fs = require("fs");

var path = require('path');
const excel = require('exceljs');


@Injectable()
export class ReportsService {
    constructor(
        @InjectRepository(Ligand001wb) private readonly ligandReportRepository: Repository<Ligand001wb>,
        @InjectRepository(Assay001wb) private readonly assayReportRepository: Repository<Assay001wb>,
        @InjectRepository(Measurement001wb) private readonly measurementReportRepository: Repository<Measurement001wb>,
    ) {

    }




    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let ligand = await this.ligandReportRepository.find({ relations: ["ligandVersionSlno2", "ligandTypeSlno2"] });

        let assay = await this.assayReportRepository.find({ relations: ["assayTypeSlno2", "toxiCitySlno2", "routeSlno2", "unitSlno2", "unitedSlno2", "ligandSlno2", "ligandSlno2.ligandVersionSlno2"] });

        let measurement = await this.measurementReportRepository.find({ relations: ["categorySlno2", "functionSlno2", "originalPrefixSlno2", "typeSlno2"] });


        if ((ligand.length < 0 )&& (assay.length < 0) && (measurement.length< 0)) {
            return;
        }
        else {
            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('Reports'); // creating worksheet
            worksheet.columns = [{ key: 'A', width: 20.0 },{ key: 'B', width: 95.0 }, { key: 'C', width: 20.0 },
            { key: 'D', width: 20.0 }, { key: 'E', width: 20.0 }, { key: 'F', width: 20.0 }, { key: 'G', width: 20.0 },
            { key: 'H', width: 20.0 }, { key: 'I', width: 20.0 }, { key: 'J', width: 20.0 }, { key: 'K', width: 20.0 },
            { key: 'L', width: 20.0 }, { key: 'M', width: 20.0 }, { key: 'N', width: 20.0 }, { key: 'O', width: 20.0 },
            { key: 'P', width: 20.0 }, { key: 'Q', width: 20.0 }, { key: 'R', width: 20.0 }, { key: 'S', width: 20.0 },
            { key: 'T', width: 20.0 }, { key: 'U', width: 20.0 }, { key: 'V', width: 20.0 }, { key: 'W', width: 20.0 },
            { key: 'X', width: 20.0 }, { key: 'Y', width: 20.0 }, { key: 'Z', width: 20.0 },{ key: 'AA', width: 20.0 },
            { key: 'AB', width: 20.0 }, { key: 'AC', width: 25.0 }, { key: 'AD', width: 25.0 },{ key: 'AE', width: 25.0 },
            { key: 'AF', width: 29.0 }, { key: 'AG', width: 25.0 }, { key: 'AH', width: 25.0 },{ key: 'AI', width: 25.0 },
            { key: 'AJ', width: 25.0 }, { key: 'AK', width: 20.0 }, { key: 'AL', width: 20.0 },{ key: 'AM', width: 20.0 },
            { key: 'AN', width: 20.0 }, { key: 'AO', width: 20.0 }, { key: 'AP', width: 20.0 },{ key: 'AQ', width: 20.0 },
            { key: 'AR', width: 20.0 }, { key: 'AS', width: 20.0 }, { key: 'AT', width: 20.0 },{ key: 'AU', width: 25.0 },
            { key: 'AV', width: 20.0 }, { key: 'AW', width: 20.0 }, { key: 'AX', width: 30.0 },{ key: 'AY', width: 30.0 },
            { key: 'AZ', width: 30.0 },{ key: 'BA', width: 20.0 }, { key: 'BB', width: 40.0 }, { key: 'BC', width: 18.0 },
            { key: 'BD', width: 18.0 },{ key: 'BE', width: 18.0 }, { key: 'BF', width: 18.0 }, { key: 'BG', width: 18.0 },
            { key: 'BH', width: 18.0 },{ key: 'BI', width: 48.0 },{ key: 'BJ', width: 41.0 },{ key: 'BK', width: 18.0 },
            { key: 'BL', width: 18.0 },{ key: 'BM', width: 18.0 },{ key: 'BN', width: 18.0 },{ key: 'BO', width: 18.0 },
            { key: 'BP', width: 18.0 },{ key: 'BQ', width: 18.0 },{ key: 'BR', width: 18.0 },{ key: 'BS', width: 18.0 },
            { key: 'BT', width: 18.0 },{ key: 'BU', width: 18.0 },{ key: 'BV', width: 18.0 },{ key: 'BW', width: 18.0 },
            { key: 'BX', width: 18.0 },{ key: 'BY', width: 18.0 },{ key: 'BZ', width: 18.0 },{ key: 'CA', width: 18.0 },
            { key: 'CB', width: 18.0 },{ key: 'CC', width: 18.0 },{ key: 'CD', width: 18.0 },{ key: 'CE', width: 18.0 },
            { key: 'CF', width: 18.0 },{ key: 'CG', width: 18.0 },{ key: 'CH', width: 18.0 },{ key: 'CI', width: 18.0 },
            { key: 'CJ', width: 18.0 },{ key: 'CK', width: 18.0 },{ key: 'CL', width: 18.0 },{ key: 'CM', width: 18.0 },
            { key: 'CN', width: 18.0 },{ key: 'CO', width: 18.0 },{ key: 'CP', width: 18.0 },{ key: 'CQ', width: 18.0 },];
            
            worksheet.columns.forEach((col) => {
                
                col.style.font = {
                    size: 7,
                    bold: true
                };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.getCell('A1:A1').alignment = { vertical: 'bottom', horizontal: 'left' ,wrapText:true};
            worksheet.getCell('A1:A1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b050' }, bgColor: { argb: '00b050' } };
            worksheet.mergeCells('A1:A1');
            worksheet.getCell('A1:A1').value = "LINK";
            worksheet.getCell('A1:A1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('B1:B1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('B1:B1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b050' }, bgColor: { argb: '00b050' } };
            worksheet.mergeCells('B1:B1');
            worksheet.getCell('B1:B1').value = "Ligand";
            worksheet.getCell('B1:B1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('C1:C1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('C1:C1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b050' }, bgColor: { argb: '00b050' } };
            worksheet.mergeCells('C1:C1');
            worksheet.getCell('C1:C1').value = "Ligand";
            worksheet.getCell('C1:C1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('D1:D1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('D1:D1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b050' }, bgColor: { argb: '00b050' } };
            worksheet.mergeCells('D1:D1');
            worksheet.getCell('D1:D1').value = "Ligand";
            worksheet.getCell('D1:D1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('E1:E1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('E1:E1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b050' }, bgColor: { argb: '00b050' } };
            worksheet.mergeCells('E1:E1');
            worksheet.getCell('E1:E1').value = "Ligand";
            worksheet.getCell('E1:E1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('F1:F1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('F1:F1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b050' }, bgColor: { argb: '00b050' } };
            worksheet.mergeCells('F1:F1');
            worksheet.getCell('F1:F1').value = "Ligand";
            worksheet.getCell('F1:F1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('G1:G1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('G1:G1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b050' }, bgColor: { argb: '00b050' } };
            worksheet.mergeCells('G1:G1');
            worksheet.getCell('G1:G1').value = "Ligand";
            worksheet.getCell('G1:G1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('H1:H1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('H1:H1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'fabf8f' }, bgColor: { argb: 'fabf8f' } };
            worksheet.mergeCells('H1:H1');
            worksheet.getCell('H1:H1').value = "Ligand";
            worksheet.getCell('H1:H1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('I1:I1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('I1:I1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'fabf8f' }, bgColor: { argb: 'fabf8f' } };
            worksheet.mergeCells('I1:I1');
            worksheet.getCell('I1:I1').value = "Ligand";
            worksheet.getCell('I1:I1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('J1:J1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('J1:J1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'fabf8f' }, bgColor: { argb: 'fabf8f' } };
            worksheet.mergeCells('J1:J1');
            worksheet.getCell('J1:J1').value = "Ligand";
            worksheet.getCell('J1:J1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('K1:K1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('K1:K1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b050' }, bgColor: { argb: '00b050' } };
            worksheet.mergeCells('K1:K1');
            worksheet.getCell('K1:K1').value = "Ligand";
            worksheet.getCell('K1:K1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('L1:L1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('L1:L1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b050' }, bgColor: { argb: '00b050' } };
            worksheet.mergeCells('L1:L1');
            worksheet.getCell('L1:L1').value = "Ligand";
            worksheet.getCell('L1:L1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('M1:M1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('M1:M1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b0f0' }, bgColor: { argb: '00b0f0' } };
            worksheet.mergeCells('M1:M1');
            worksheet.getCell('M1:M1').value = "Ligand";
            worksheet.getCell('M1:M1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('N1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('N1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b0f0' }, bgColor: { argb: '00b0f0' } };
            worksheet.mergeCells('N1');
            worksheet.getCell('N1').value = "Ligand";
            worksheet.getCell('N1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('O1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('O1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00b050' }, bgColor: { argb: '00b050' } };
            worksheet.mergeCells('O1');
            worksheet.getCell('O1').value = "Ligand";
            worksheet.getCell('O1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });
        }
    }
}
