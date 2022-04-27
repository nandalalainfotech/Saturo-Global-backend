import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OperationbomDTO } from "src/dto/Operationbom.dto";

import { Repository } from "typeorm";
import { Request } from "supertest";
import { Response } from "express";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");
import { createReadStream } from "fs";
import { Operationbom001mb } from "src/entity/Operationbom001mb";
var html = fs.readFileSync("operation.html", "utf8");

@Injectable()

export class OperationService {

    constructor(@InjectRepository(Operationbom001mb) private readonly operationRepository: Repository<Operationbom001mb>) { }

    async create(operationbomDTO: OperationbomDTO): Promise<Operationbom001mb> {
        const operationbom001mb = new Operationbom001mb();
        operationbom001mb.setProperties(operationbomDTO);
        return this.operationRepository.save(operationbom001mb);
    }

    async update(operationbomDTO: OperationbomDTO): Promise<Operationbom001mb> {
        const operationbom001mb = new Operationbom001mb();
        operationbom001mb.setProperties(operationbomDTO);
        await this.operationRepository.update({ opId: operationbom001mb.opId }, operationbom001mb);
        return operationbom001mb;
    }

    async findAll(): Promise<Operationbom001mb[]> {
        return this.operationRepository.find();
    }

    findOne(id: string): Promise<Operationbom001mb> {
        return this.operationRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.operationRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let operation: any[] = await this.operationRepository.find();
        // console.log("backend materials-service for pdf----->", materials);

        var document = {
            html: html,
            data: {
                Operation: operation,
            },
            path: path.join(`./pdf/operation.pdf`),
            type: "",
        };
        var options = {
            format: "A3",
            orientation: "portrait",
            border: "10mm",
            header: {
                height: "45mm",
            },
            footer: {
                height: "28mm",

            }
        };
        if (operation.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "operation.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };
    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

		let operation = await this.operationRepository.find();
		// console.log("backend operation-service----->", operation);

		if (operation.length < 0) {
			return;
		}
		else {

			let workbook = new excel.Workbook();
			let worksheet = workbook.addWorksheet('operation');
			worksheet.getRow(1).height = 30;
			worksheet.getRow(2).height = 30;
			worksheet.getRow(3).height = 25;
			worksheet.getRow(4).height = 20;
			worksheet.getRow(5).height = 20;
			worksheet.getRow(6).height = 20;
			worksheet.getRow(7).height = 20;
			worksheet.getRow(8).height = 20;
			worksheet.getRow(9).height = 20;
			worksheet.getRow(10).height = 20;
			worksheet.getRow(11).height = 20;
			worksheet.getRow(12).height = 20;
			worksheet.getRow(13).height = 20;
			worksheet.getRow(14).height = 20;
			worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 30.0 }, { key: 'C', width: 30.0 }];

			worksheet.columns.forEach((col) => {
				col.style.font = {
					size: 10,
					bold: true
				};
				col.style.alignment = { vertical: 'middle', horizontal: 'center' };
				col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
			})
			worksheet.mergeCells('A1:C1');
			worksheet.getCell('A1:C1').value = "NANDALALA ERP";
			worksheet.getCell('A1:C1').font = {
				size: 20,
				bold: true
			};
			worksheet.getCell('A1:C1').fill = {
				type: 'pattern', pattern: 'solid', fgColor:
					{ argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
			};
			worksheet.getCell('A1:C1').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('A2:C2');
			worksheet.getCell('A2:C2').value = "BOM Operation";
			worksheet.getCell('A2:C2').font = {
				size: 16,
				bold: true
			};
			worksheet.getCell('A2:C2').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('A3');
			worksheet.getCell('A3').value = "ID";
			worksheet.getCell('A3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('B3');
			worksheet.getCell('B3').value = "Operation Name";
			worksheet.getCell('B3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('C3');
			worksheet.getCell('C3').value = "Work Station";
			worksheet.getCell('C3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

			for (let i = 0; i < operation.length; i++) {

				let temp = i + 4;

				worksheet.mergeCells('A' + temp);
				worksheet.getCell('A' + temp).value = operation[i].opId;
				worksheet.getCell('A' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('B' + temp);
				worksheet.getCell('B' + temp).value = operation[i].opName;
				worksheet.getCell('B' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('C' + temp);
				worksheet.getCell('C' + temp).value = operation[i].workstName;
				worksheet.getCell('C' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				}


			return workbook.xlsx.write(response).then(function () {
				response['status'](200).end();
			});

		}
	}
}