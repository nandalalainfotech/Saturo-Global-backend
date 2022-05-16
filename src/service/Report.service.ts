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

        let assay = await this.assayReportRepository.find({ relations: ["assayTypeSlno2", "toxiCitySlno2", "routeSlno2", "unitSlno2", "unitsSlno2", "unitedSlno2", "ligandSlno2", "ligandSlno2.ligandVersionSlno2"] });

        let measurement = await this.measurementReportRepository.find({ relations: ["categorySlno2", "functionSlno2", "originalPrefixSlno2", "typeSlno2"] });


        if (ligand.length < 0) {
            return;
        }
        else {
            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('Reports'); // creating worksheet
            worksheet.pageSetup.printArea = 'A1:Z1';
            worksheet.columns = [{ key: 'A', width: 25.0 },
            { key: 'B', width: 95.0 }, { key: 'C', width: 15.0 },
            { key: 'D', width: 15.0 }, { key: 'E', width: 15.0 }, { key: 'F', width: 15.0 }, { key: 'G', width: 30.0 },
            { key: 'H', width: 15.0 }, { key: 'I', width: 15.0 }, { key: 'J', width: 15.0 }, { key: 'K', width: 15.0 },
            { key: 'L', width: 15.0 }, { key: 'M', width: 15.0 }, { key: 'N', width: 15.0 }, { key: 'O', width: 100.0 },
            { key: 'P', width: 15.0 }, { key: 'Q', width: 15.0 }, { key: 'R', width: 15.0 }, { key: 'S', width: 15.0 },
            { key: 'T', width: 15.0 }, { key: 'U', width: 15.0 }, { key: 'V', width: 15.0 }, { key: 'W', width: 15.0 },
            { key: 'X', width: 15.0 }, { key: 'Y', width: 15.0 }, { key: 'Z', width: 15.0 },{ key: 'AA', width: 15.0 },
            { key: 'AB', width: 15.0 }, { key: 'AC', width: 25.0 }, { key: 'AD', width: 25.0 },{ key: 'AE', width: 25.0 },
            { key: 'AF', width: 29.0 }, { key: 'AG', width: 25.0 }, { key: 'AH', width: 25.0 },{ key: 'AI', width: 25.0 },
            { key: 'AJ', width: 25.0 }, { key: 'AK', width: 15.0 }, { key: 'AL', width: 15.0 },{ key: 'AM', width: 15.0 },
            { key: 'AN', width: 15.0 }, { key: 'AO', width: 15.0 }, { key: 'AP', width: 15.0 },{ key: 'AQ', width: 15.0 },
            { key: 'AR', width: 15.0 }, { key: 'AS', width: 20.0 }, { key: 'AT', width: 15.0 },{ key: 'AU', width: 25.0 },
            { key: 'AV', width: 15.0 }, { key: 'AW', width: 15.0 }, { key: 'AX', width: 30.0 },{ key: 'AY', width: 30.0 },
            { key: 'AZ', width: 30.0 },
            { key: 'BA', width: 15.0 }, { key: 'BB', width: 40.0 }, { key: 'BC', width: 18.0 },{ key: 'BD', width: 18.0 },
            { key: 'BE', width: 18.0 }, { key: 'BF', width: 18.0 }, { key: 'BG', width: 18.0 },{ key: 'BH', width: 18.0 },
            { key: 'BI', width: 48.0 },{ key: 'BJ', width: 41.0 },{ key: 'BK', width: 18.0 },];
            
            worksheet.columns.forEach((col) => {
                // col.style.font = { name: 'Comic Sans MS' };
                col.style.font = {
                    // name: 'Comic Sans MS',
                    // family: 4,
                    size: 7,
                    // underline: true,
                    bold: true
                };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })



            worksheet.getCell('A1:A1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('A1:A1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('A1:A1');
            worksheet.getCell('A1:A1').value = "LINK";
            worksheet.getCell('A1:A1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('A2:A2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('A2:A2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('A2:A2');
            worksheet.getCell('A2:A2').value = "TAN Number";
            worksheet.getCell('A2:A2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('B1:B1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('B1:B1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('B1:B1');
            worksheet.getCell('B1:B1').value = "Ligand";
            worksheet.getCell('B1:B1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('B2:B2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('B2:B2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('B2:B2');
            worksheet.getCell('B2:B2').value = "Ligand-Uri";
            worksheet.getCell('B2:B2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('C1:C1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('C1:C1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('C1:C1');
            worksheet.getCell('C1:C1').value = "Ligand";
            worksheet.getCell('C1:C1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('C2:C2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('C2:C2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('C2:C2');
            worksheet.getCell('C2:C2').value = "Ligand-Version";
            worksheet.getCell('C2:C2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('D1:D1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('D1:D1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('D1:D1');
            worksheet.getCell('D1:D1').value = "Ligand";
            worksheet.getCell('D1:D1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('D2:D2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('D2:D2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('D2:D2');
            worksheet.getCell('D2:D2').value = "Ligand-status";
            worksheet.getCell('D2:D2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('E1:E1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('E1:E1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('E1:E1');
            worksheet.getCell('E1:E1').value = "Ligand";
            worksheet.getCell('E1:E1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('E2:E2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('E2:E2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('E2:E2');
            worksheet.getCell('E2:E2').value = "Collection";
            worksheet.getCell('E2:E2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('F1:F1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('F1:F1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('F1:F1');
            worksheet.getCell('F1:F1').value = "Ligand";
            worksheet.getCell('F1:F1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('F2:F2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('F2:F2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('F2:F2');
            worksheet.getCell('F2:F2').value = "Ligand-Type";
            worksheet.getCell('F2:F2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('G1:G1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('G1:G1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('G1:G1');
            worksheet.getCell('G1:G1').value = "Ligand";
            worksheet.getCell('G1:G1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('G2:G2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('G2:G2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('G2:G2');
            worksheet.getCell('G2:G2').value = "Ligand-detail";
            worksheet.getCell('G2:G2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('H1:H1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('H1:H1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('H1:H1');
            worksheet.getCell('H1:H1').value = "Ligand";
            worksheet.getCell('H1:H1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('H2:H2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('H2:H2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('H2:H2');
            worksheet.getCell('H2:H2').value = "Collection-name";
            worksheet.getCell('H2:H2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('I1:I1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('I1:I1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('I1:I1');
            worksheet.getCell('I1:I1').value = "Ligand";
            worksheet.getCell('I1:I1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('I2:I2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('I2:I2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('I2:I2');
            worksheet.getCell('I2:I2').value = "Collection-id";
            worksheet.getCell('I2:I2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('J1:J1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('J1:J1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('J1:J1');
            worksheet.getCell('J1:J1').value = "Ligand";
            worksheet.getCell('J1:J1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('J2:J2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('J2:J2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('J2:J2');
            worksheet.getCell('J2:J2').value = "Locator";
            worksheet.getCell('J2:J2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('K1:K1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('K1:K1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('K1:K1');
            worksheet.getCell('K1:K1').value = "Reference";
            worksheet.getCell('K1:K1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('K2:K2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('K2:K2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('K2:K2');
            worksheet.getCell('K2:K2').value = "Source-type";
            worksheet.getCell('K2:K2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('L1:L1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('L1:L1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('L1:L1');
            worksheet.getCell('L1:L1').value = "Reference";
            worksheet.getCell('L1:L1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('L2:L2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('L2:L2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('L2:L2');
            worksheet.getCell('L2:L2').value = "Citation";
            worksheet.getCell('L2:L2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('M1:M1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('M1:M1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('M1:M1');
            worksheet.getCell('M1:M1').value = "Disease";
            worksheet.getCell('M1:M1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('M2:M2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('M2:M2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('M2:M2');
            worksheet.getCell('M2:M2').value = "Original-disease-name";
            worksheet.getCell('M2:M2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('N1:N1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('N1:N1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('N1:N1');
            worksheet.getCell('N1:N1').value = "Target";
            worksheet.getCell('N1:N1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('N2:N2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('N2:N2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('N2:N2');
            worksheet.getCell('N2:N2').value = "Ligand-Version";
            worksheet.getCell('N2:N2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('O1:O1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('O1:O1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('O1:O1');
            worksheet.getCell('O1:O1').value = "Target";
            worksheet.getCell('O1:O1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('O2:O2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('O2:O2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('O2:O2');
            worksheet.getCell('O2:O2').value = "Target-uri";
            worksheet.getCell('O2:O2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('P1:P1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('P1:P1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('P1:P1');
            worksheet.getCell('P1:P1').value = "Target";
            worksheet.getCell('P1:P1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('P2:P2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('P2:P2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('P2:P2');
            worksheet.getCell('P2:P2').value = "Target-version";
            worksheet.getCell('P2:P2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('Q1:Q1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('Q1:Q1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('Q1:Q1');
            worksheet.getCell('Q1:Q1').value = "Target";
            worksheet.getCell('Q1:Q1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('Q2:Q2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('Q2:Q2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('Q2:Q2');
            worksheet.getCell('Q2:Q2').value = "Target-status";
            worksheet.getCell('Q2:Q2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('R1:R1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('R1:R1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('R1:R1');
            worksheet.getCell('R1:R1').value = "Target";
            worksheet.getCell('R1:R1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('R2:R2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('R2:R2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('R2:R2');
            worksheet.getCell('R2:R2').value = "Collection-id";
            worksheet.getCell('R2:R2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('S1:S1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('S1:S1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('S1:S1');
            worksheet.getCell('S1:S1').value = "Target";
            worksheet.getCell('S1:S1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('S2:S2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('S2:S2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('S2:S2');
            worksheet.getCell('S2:S2').value = "Original-target-name";
            worksheet.getCell('S2:S2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('T1:T1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('T1:T1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('T1:T1');
            worksheet.getCell('T1:T1').value = "Target";
            worksheet.getCell('T1:T1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('T2:T2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('T2:T2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('T2:T2');
            worksheet.getCell('T2:T2').value = "Acronym";
            worksheet.getCell('T2:T2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('U1:U1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('U1:U1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('U1:U1');
            worksheet.getCell('U1:U1').value = "Target";
            worksheet.getCell('U1:U1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('U2:U2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('U2:U2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('U2:U2');
            worksheet.getCell('U2:U2').value = "Organism-source";
            worksheet.getCell('U2:U2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('V1:V1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('V1:V1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('V1:V1');
            worksheet.getCell('V1:V1').value = "Target";
            worksheet.getCell('V1:V1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('V2:V2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('V2:V2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '9ECAEE' }, bgColor: { argb: '9ECAEE' } };
            worksheet.mergeCells('V2:V2');
            worksheet.getCell('V2:V2').value = "Variant";
            worksheet.getCell('V2:V2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            // -----------------------------------asssay---------------------------------


            worksheet.getCell('W1:W1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('W1:W1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('W1:W1');
            worksheet.getCell('W1:W1').value = "Assay";
            worksheet.getCell('W1:W1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('W2:W2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('W2:W2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('W2:W2');
            worksheet.getCell('W2:W2').value = "Ligand-Version";
            worksheet.getCell('W2:W2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('X1:X1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('X1:X1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('X1:X1');
            worksheet.getCell('X1:X1').value = "Assay";
            worksheet.getCell('X1:X1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('X2:X2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('X2:X2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('X2:X2');
            worksheet.getCell('X2:X2').value = "Ordinal";
            worksheet.getCell('X2:X2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('Y1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('Y1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('Y1');
            worksheet.getCell('Y1').value = "Assay";
            worksheet.getCell('Y1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('Y2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('Y2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('Y2');
            worksheet.getCell('Y2').value = "Collection-id";
            worksheet.getCell('Y2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('Z1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('Z1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('Z1');
            worksheet.getCell('Z1').value = "Assay";
            worksheet.getCell('Z1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('Z2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('Z2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('Z2');
            worksheet.getCell('Z2').value = "Assay-type";
            worksheet.getCell('Z2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AA1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AA1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AA1');
            worksheet.getCell('AA1').value = "Assay";
            worksheet.getCell('AA1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AA2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AA2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AA2');
            worksheet.getCell('AA2').value = "Toxicity-type";
            worksheet.getCell('AA2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AB1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AB1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AB1');
            worksheet.getCell('AB1').value = "Assay";
            worksheet.getCell('AB1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AB2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AB2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AB2');
            worksheet.getCell('AB2').value = "Route-of-administration";
            worksheet.getCell('AB2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AC1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AC1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AC1');
            worksheet.getCell('AC1').value = "Assay";
            worksheet.getCell('AC1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AC2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AC2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AC2');
            worksheet.getCell('AC2').value = "Ligand-Dose(Single-value)";
            worksheet.getCell('AC2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AD1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AD1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AD1');
            worksheet.getCell('AD1').value = "Assay";
            worksheet.getCell('AD1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AD2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AD2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AD2');
            worksheet.getCell('AD2').value = "Unit(Single-value)";
            worksheet.getCell('AD2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('AE1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AE1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AE1');
            worksheet.getCell('AE1').value = "Assay";
            worksheet.getCell('AE1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AE2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AE2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AE2');
            worksheet.getCell('AE2').value = "Ligand-Dose(High-end-value)";
            worksheet.getCell('AE2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AF1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AF1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AF1');
            worksheet.getCell('AF1').value = "Assay";
            worksheet.getCell('AF1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AF2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AF2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AF2');
            worksheet.getCell('AF2').value = "Unit(High-end-value)";
            worksheet.getCell('AF2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AG1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AG1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AG1');
            worksheet.getCell('AG1').value = "Assay";
            worksheet.getCell('AG1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AG2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AG2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AG2');
            worksheet.getCell('AG2').value = "Ligand-Dose(Low-end-value)";
            worksheet.getCell('AG2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AH1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AH1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AH1');
            worksheet.getCell('AH1').value = "Assay";
            worksheet.getCell('AH1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AH2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AH2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AH2');
            worksheet.getCell('AH2').value = "Unit(Low-end-value)";
            worksheet.getCell('AH2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AI1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AI1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AI1');
            worksheet.getCell('AI1').value = "Assay";
            worksheet.getCell('AI1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AI2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AI2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AI2');
            worksheet.getCell('AI2').value = "Administration-regimen";
            worksheet.getCell('AI2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AJ1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AJ1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AJ1');
            worksheet.getCell('AJ1').value = "Assay";
            worksheet.getCell('AJ1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AJ2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AJ2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AJ2');
            worksheet.getCell('AJ2').value = "Procedure";
            worksheet.getCell('AJ2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AK1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AK1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AK1');
            worksheet.getCell('AK1').value = "Assay";
            worksheet.getCell('AK1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AK2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AK2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AK2');
            worksheet.getCell('AK2').value ="Target-uri";
            worksheet.getCell('AK2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AL1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AL1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AL1');
            worksheet.getCell('AL1').value = "Assay";
            worksheet.getCell('AL1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AL2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AL2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AL2');
            worksheet.getCell('AL2').value = "Condition type";
            worksheet.getCell('AL2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AM1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AM1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AM1');
            worksheet.getCell('AM1').value = "Assay";
            worksheet.getCell('AM1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AM2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AM2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AM2');
            worksheet.getCell('AM2').value = "Condition material";
            worksheet.getCell('AM2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            
            worksheet.getCell('AN1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AN1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AN1');
            worksheet.getCell('AN1').value = "Assay";
            worksheet.getCell('AN1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AN2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AN2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AN2');
            worksheet.getCell('AN2').value = "Condition material-id";
            worksheet.getCell('AN2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AO1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AO1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AO1');
            worksheet.getCell('AO1').value = "Assay";
            worksheet.getCell('AO1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AO2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AO2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AO2');
            worksheet.getCell('AO2').value = "value";
            worksheet.getCell('AO2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            
            worksheet.getCell('AP1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AP1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AP1');
            worksheet.getCell('AP1').value = "Measurement";
            worksheet.getCell('AP1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AP2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AP2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD700' }, bgColor: { argb: 'FFD700' } };
            worksheet.mergeCells('AP2');
            worksheet.getCell('AP2').value = "Data-locator";
            worksheet.getCell('AP2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AQ1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AQ1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AQ1');
            worksheet.getCell('AQ1').value = "Measurement";
            worksheet.getCell('AQ1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AQ2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AQ2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AQ2');
            worksheet.getCell('AQ2').value = "Category";
            worksheet.getCell('AQ2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AR1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AR1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AR1');
            worksheet.getCell('AR1').value = "Measurement";
            worksheet.getCell('AR1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AR2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AR2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AR2');
            worksheet.getCell('AR2').value = "Category(functions)";
            worksheet.getCell('AR2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AS1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AS1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AS1');
            worksheet.getCell('AS1').value = "Measurement";
            worksheet.getCell('AS1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AS2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AS2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AS2');
            worksheet.getCell('AS2').value = "Parameter";
            worksheet.getCell('AS2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AT1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AT1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AT1');
            worksheet.getCell('AT1').value = "Measurement";
            worksheet.getCell('AT1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AT2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AT2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AT2');
            worksheet.getCell('AT2').value ="Parameter-detail";
            worksheet.getCell('AT2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AU1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AU1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AU1');
            worksheet.getCell('AU1').value = "Measurement";
            worksheet.getCell('AU1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AU2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AU2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AU2');
            worksheet.getCell('AU2').value = "Original-prefix";
            worksheet.getCell('AU2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AV1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AV1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AV1');
            worksheet.getCell('AV1').value = "Measurement";
            worksheet.getCell('AV1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AV2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AV2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AV2');
            worksheet.getCell('AV2').value = "Unit";
            worksheet.getCell('AV2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AW1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AW1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AW1');
            worksheet.getCell('AW1').value = "Measurement";
            worksheet.getCell('AW1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AW2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AW2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AW2');
            worksheet.getCell('AW2').value = "Original-value(Single-value)";
            worksheet.getCell('AW2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AX1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AX1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AX1');
            worksheet.getCell('AX1').value = "Measurement";
            worksheet.getCell('AX1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AX2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AX2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AX2');
            worksheet.getCell('AX2').value = "Original-value(High-end-value)";
            worksheet.getCell('AX2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AY1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AY1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AY1');
            worksheet.getCell('AY1').value = "Measurement";
            worksheet.getCell('AY1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AY2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AY2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AY2');
            worksheet.getCell('AY2').value = "Original-value(Low-end-value)";
            worksheet.getCell('AY2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AZ1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AZ1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AZ1');
            worksheet.getCell('AZ1').value = "Measurement";
            worksheet.getCell('AZ1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('AZ2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('AZ2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('AZ2');
            worksheet.getCell('AZ2').value =  "Unit";
            worksheet.getCell('AZ2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BA1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BA1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BA1');
            worksheet.getCell('BA1').value = "Measurement";
            worksheet.getCell('BA1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BA2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BA2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BA2');
            worksheet.getCell('BA2').value = "Original-value(Non-numeric-value)";
            worksheet.getCell('BA2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BB1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BB1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BB1');
            worksheet.getCell('BB1').value = "Measurement";
            worksheet.getCell('BB1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BB2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BB2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BB2');
            worksheet.getCell('BB2').value = "Remarks";
            worksheet.getCell('BB2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BC1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BC1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BC1');
            worksheet.getCell('BC1').value = "Biological system";
            worksheet.getCell('BC1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BC2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BC2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BC2');
            worksheet.getCell('BC2').value = "Type";
            worksheet.getCell('BC2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BD1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BD1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BD1');
            worksheet.getCell('BD1').value = "Biological system";
            worksheet.getCell('BD1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BD2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BD2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BD2');
            worksheet.getCell('BD2').value = "Cell";
            worksheet.getCell('BD2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BE1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BE1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BE1');
            worksheet.getCell('BE1').value = "Biological system";
            worksheet.getCell('BE1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BE2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BE2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BE2');
            worksheet.getCell('BE2').value = "Cell-detail";
            worksheet.getCell('BE2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BF1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BF1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BF1');
            worksheet.getCell('BF1').value = "Biological system";
            worksheet.getCell('BF1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BF2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BF2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BF2');
            worksheet.getCell('BF2').value = "Organ";
            worksheet.getCell('BF2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BG1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BG1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BG1');
            worksheet.getCell('BG1').value = "Biological system";
            worksheet.getCell('BG1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BG2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BG2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BG2');
            worksheet.getCell('BG2').value = "Organ-detail";
            worksheet.getCell('BG2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };


            worksheet.getCell('BH1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BH1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BH1');
            worksheet.getCell('BH1').value = "Biological system";
            worksheet.getCell('BH1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BH2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BH2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BH2');
            worksheet.getCell('BH2').value = "Species";
            worksheet.getCell('BH2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BI1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BI1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BI1');
            worksheet.getCell('BI1').value = "Biological system";
            worksheet.getCell('BI1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BI2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BI2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BI2');
            worksheet.getCell('BI2').value = "Species-detail";
            worksheet.getCell('BI2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BJ1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BJ1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BJ1');
            worksheet.getCell('BJ1').value = "Biological system";
            worksheet.getCell('BJ1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BJ2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BJ2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BJ2');
            worksheet.getCell('BJ2').value =  "Gender";
            worksheet.getCell('BJ2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BK1').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BK1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BK1');
            worksheet.getCell('BK1').value = "Biological system";
            worksheet.getCell('BK1').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

            worksheet.getCell('BK2').alignment = { vertical: 'bottom', horizontal: 'left' };
            worksheet.getCell('BK2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4CBB17' }, bgColor: { argb: '4CBB17' } };
            worksheet.mergeCells('BK2');
            worksheet.getCell('BK2').value = "Age-group";
            worksheet.getCell('BK2').font = {
                size: 11,
                name: 'Calibri',
                bold: true
            };

           



            for (let i = 0; i < ligand.length; i++) {
                // console.log("ligand--->", ligand[i]);

                let temp = i + 3;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = ligand[i].tanNumber;
                worksheet.getCell('A' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('A' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = ligand[i].ligandUri;
                worksheet.getCell('B' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('B' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = ligand[i].ligandVersionSlno2.ligandVersion;
                worksheet.getCell('C' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('C' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = ligand[i].ligandStatus;
                worksheet.getCell('D' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('D' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };


                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = ligand[i].collection;
                worksheet.getCell('E' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('E' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };


                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = ligand[i].ligandTypeSlno2.ligandtype;
                worksheet.getCell('F' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('F' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = ligand[i].ligandDetail;
                worksheet.getCell('G' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('G' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('H' + temp);
                worksheet.getCell('H' + temp).value = ligand[i].collectionName;
                worksheet.getCell('H' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('H' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };


                worksheet.mergeCells('I' + temp);
                worksheet.getCell('I' + temp).value = ligand[i].collectionId;
                worksheet.getCell('I' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('I' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('J' + temp);
                worksheet.getCell('J' + temp).value = ligand[i].locator;
                worksheet.getCell('J' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('J' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('K' + temp);
                worksheet.getCell('K' + temp).value = ligand[i].sourceType;
                worksheet.getCell('K' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('K' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('L' + temp);
                worksheet.getCell('L' + temp).value = ligand[i].citation;
                worksheet.getCell('L' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('L' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('M' + temp);
                worksheet.getCell('M' + temp).value = ligand[i].diseaseName;
                worksheet.getCell('M' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('M' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('N' + temp);
                worksheet.getCell('N' + temp).value = ligand[i].ligandVersionSlno2.ligandVersion;
                worksheet.getCell('N' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('N' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('O' + temp);
                worksheet.getCell('O' + temp).value = ligand[i].target;
                worksheet.getCell('O' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('O' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('P' + temp);
                worksheet.getCell('P' + temp).value = ligand[i].targetVersion;
                worksheet.getCell('P' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('P' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('Q' + temp);
                worksheet.getCell('Q' + temp).value = ligand[i].targetStatus;
                worksheet.getCell('Q' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('Q' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('R' + temp);
                worksheet.getCell('R' + temp).value = ligand[i].collectionId1;
                worksheet.getCell('R' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('R' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('S' + temp);
                worksheet.getCell('S' + temp).value = ligand[i].original;
                worksheet.getCell('S' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('S' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('T' + temp);
                worksheet.getCell('T' + temp).value = ligand[i].acronym;
                worksheet.getCell('T' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('T' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('U' + temp);
                worksheet.getCell('U' + temp).value = ligand[i].organism;
                worksheet.getCell('U' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('U' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('V' + temp);
                worksheet.getCell('V' + temp).value = ligand[i].variant;
                worksheet.getCell('V' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('V' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };




            }


            for (let i = 0; i < assay.length; i++) {
                // console.log("assay--->", assay[i]);
                let temp = i + 3;

                worksheet.mergeCells('W' + temp);
                worksheet.getCell('W' + temp).value = assay[i].ligandSlno2.ligandVersionSlno2.ligandVersion;
                worksheet.getCell('W' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('W' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('X' + temp);
                worksheet.getCell('X' + temp).value = assay[i].ordinal;
                worksheet.getCell('X' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('X' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('Y' + temp);
                worksheet.getCell('Y' + temp).value = assay[i].collectionId;
                worksheet.getCell('Y' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('Y' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('Z' + temp);
                worksheet.getCell('Z' + temp).value = assay[i].assayTypeSlno2.assayType;
                worksheet.getCell('Z' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('Z' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AA' + temp);
                worksheet.getCell('AA' + temp).value = assay[i].toxiCitySlno2.toxiCity;
                worksheet.getCell('AA' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AA' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AB' + temp);
                worksheet.getCell('AB' + temp).value = assay[i].routeSlno2.route;
                worksheet.getCell('AB' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AB' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AC' + temp);
                worksheet.getCell('AC' + temp).value = assay[i].ligandSvalue;
                worksheet.getCell('AC' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AC' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AD' + temp);
                worksheet.getCell('AD' + temp).value = assay[i].unitSlno2.unit;
                worksheet.getCell('AD' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AD' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AE' + temp);
                worksheet.getCell('AE' + temp).value = assay[i].ligandHvalue;
                worksheet.getCell('AE' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AE' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AF' + temp);
                worksheet.getCell('AF' + temp).value = assay[i]. unitsSlno2.units;
                worksheet.getCell('AF' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AF' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AG' + temp);
                worksheet.getCell('AG' + temp).value = assay[i].ligandLvalue;
                worksheet.getCell('AG' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AG' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AH' + temp);
                worksheet.getCell('AH' + temp).value = assay[i].unitedSlno2.united;
                worksheet.getCell('AH' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AH' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AI' + temp);
                worksheet.getCell('AI' + temp).value = assay[i].administration;
                worksheet.getCell('AI' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AI' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AJ' + temp);
                worksheet.getCell('AJ' + temp).value = assay[i].procedure;
                worksheet.getCell('AJ' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AJ' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AK' + temp);
                worksheet.getCell('AK' + temp).value = assay[i].target;
                worksheet.getCell('AK' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AK' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AL' + temp);
                worksheet.getCell('AL' + temp).value = assay[i].conditionType;
                worksheet.getCell('AL' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AL' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AM' + temp);
                worksheet.getCell('AM' + temp).value = assay[i].conditionMaterial;
                worksheet.getCell('AM' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AM' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AN' + temp);
                worksheet.getCell('AN' + temp).value = assay[i].conditionMaterialid;
                worksheet.getCell('AN' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AN' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AO' + temp);
                worksheet.getCell('AO' + temp).value = assay[i].value;
                worksheet.getCell('AO' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AO' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };




            }

            for (let i = 0; i < measurement.length; i++) {
                console.log('measurement------->', measurement[i]);
                let temp = i + 3;

                worksheet.mergeCells('AP' + temp);
                worksheet.getCell('AP' + temp).value = measurement[i].dataLocator;
                worksheet.getCell('AP' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AP' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AQ' + temp);
                worksheet.getCell('AQ' + temp).value = measurement[i].categorySlno2.category;
                worksheet.getCell('AQ' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AQ' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AR' + temp);
                worksheet.getCell('AR' + temp).value = measurement[i].functionSlno2.function;
                worksheet.getCell('AR' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AR' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AS' + temp);
                worksheet.getCell('AS' + temp).value = measurement[i].parameter;
                worksheet.getCell('AS' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AS' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AT' + temp);
                worksheet.getCell('AT' + temp).value = measurement[i].parameterDetail;
                worksheet.getCell('AT' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AT' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AU' + temp);
                worksheet.getCell('AU' + temp).value = measurement[i].originalPrefixSlno2.originalPrefix;
                worksheet.getCell('AU' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AU' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AV' + temp);
                worksheet.getCell('AV' + temp).value = measurement[i].unit;
                worksheet.getCell('AV' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AV' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AW' + temp);
                worksheet.getCell('AW' + temp).value = measurement[i].singleValue;
                worksheet.getCell('AW' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AW' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AX' + temp);
                worksheet.getCell('AX' + temp).value = measurement[i].highEndValue;
                worksheet.getCell('AX' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AX' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AY' + temp);
                worksheet.getCell('AY' + temp).value = measurement[i].lowEndValue;
                worksheet.getCell('AY' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AY' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('AZ' + temp);
                worksheet.getCell('AZ' + temp).value = measurement[i].units;
                worksheet.getCell('AZ' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('AZ' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('BA' + temp);
                worksheet.getCell('BA' + temp).value = measurement[i].nonNumeric;
                worksheet.getCell('BA' + temp).alignment = { vertical: 'bottom', horizontal: 'left' };
                worksheet.getCell('BA' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('BB' + temp);
                worksheet.getCell('BB' + temp).value = measurement[i].remark;
                worksheet.getCell('BB' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('BB' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('BC' + temp);
                worksheet.getCell('BC' + temp).value = measurement[i].typeSlno2.type;
                worksheet.getCell('BC' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('BC' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('BD' + temp);
                worksheet.getCell('BD' + temp).value = measurement[i].cell;
                worksheet.getCell('BD' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('BD' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('BE' + temp);
                worksheet.getCell('BE' + temp).value = measurement[i].cellDetail;
                worksheet.getCell('BE' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('BE' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('BF' + temp);
                worksheet.getCell('BF' + temp).value = measurement[i].organ;
                worksheet.getCell('BF' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('BF' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('BG' + temp);
                worksheet.getCell('BG' + temp).value = measurement[i].organDetail;
                worksheet.getCell('BG' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('BG' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('BH' + temp);
                worksheet.getCell('BH' + temp).value = measurement[i].species;
                worksheet.getCell('BH' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('BH' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('BI' + temp);
                worksheet.getCell('BI' + temp).value = measurement[i].speciesDetail;
                worksheet.getCell('BI' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('BI' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('BJ' + temp);
                worksheet.getCell('BJ' + temp).value = measurement[i].gender;
                worksheet.getCell('BJ' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('BJ' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };

                worksheet.mergeCells('BK' + temp);
                worksheet.getCell('BK' + temp).value = measurement[i].ageGroup;
                worksheet.getCell('BK' + temp).alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                worksheet.getCell('BK' + temp).font = {
                    size: 10,
                    name: 'Calibri',
                };
            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });
        }
    }
}
