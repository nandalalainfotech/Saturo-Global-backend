import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemdtDTO } from "src/dto/Itemdt.dto";

import { Repository } from "typeorm";
import { Request } from "supertest";
import { Response } from "express";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");
import { createReadStream } from "fs";
import { Itemdt001mb } from "src/entity/Itemdt001mb";
var html = fs.readFileSync("manu-tool.html", "utf8");

@Injectable()
export class Toolservice {

    constructor(@InjectRepository(Itemdt001mb) private readonly toolsRepository: Repository<Itemdt001mb>,) { }
    
    async create(itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        const itemdt001mb = new Itemdt001mb();
        itemdt001mb.setProperties(itemdtDTO);
        return this.toolsRepository.save(itemdt001mb);
    }

    async update(itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        const itemdt001mb = new Itemdt001mb();
        itemdt001mb.setProperties(itemdtDTO);
        await this.toolsRepository.update({ itemid: itemdt001mb.itemid }, itemdt001mb);
        return this.toolsRepository.save(itemdt001mb);
    }
    
    async findAll(): Promise<Itemdt001mb[]> {
        return this.toolsRepository.find();
    }

    findOne(id: string): Promise<Itemdt001mb> {
        return this.toolsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.toolsRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let manuTools: any[] = await this.toolsRepository.find();
        // console.log("backend manuTools-service for pdf----->", manuTools);

        var document = {
            html: html,
            data: {
                ManuTools: manuTools,
            },
            path: path.join(`./pdf/manuTools.pdf`),
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
        if (manuTools.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "manuTools.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };
    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

		let manuTools = await this.toolsRepository.find();
		// console.log("backend manuTools-service----->", manuTools);

		if (manuTools.length < 0) {
			return;
		}
		else {

			let workbook = new excel.Workbook();
			let worksheet = workbook.addWorksheet('manuTools');
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
			worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 30.0 }, { key: 'C', width: 30.0 },
			{ key: 'D', width: 30.0 }, { key: 'E', width: 30.0 }];

			worksheet.columns.forEach((col) => {
				col.style.font = {
					size: 10,
					bold: true
				};
				col.style.alignment = { vertical: 'middle', horizontal: 'center' };
				col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
			})
			worksheet.mergeCells('A1:E1');
			worksheet.getCell('A1:E1').value = "NANDALALA ERP";
			worksheet.getCell('A1:E1').font = {
				size: 20,
				bold: true
			};
			worksheet.getCell('A1:E1').fill = {
				type: 'pattern', pattern: 'solid', fgColor:
					{ argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
			};
			worksheet.getCell('A1:E1').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('A2:E2');
			worksheet.getCell('A2:E2').value = "Manufacture Tools";
			worksheet.getCell('A2:E2').font = {
				size: 16,
				bold: true
			};
			worksheet.getCell('A2:E2').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('A3');
			worksheet.getCell('A3').value = "ID";
			worksheet.getCell('A3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('B3');
			worksheet.getCell('B3').value = "Item Code";
			worksheet.getCell('B3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('C3');
			worksheet.getCell('C3').value = "Quantity";
			worksheet.getCell('C3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('D3');
			worksheet.getCell('D3').value = "Rate";
			worksheet.getCell('D3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('E3');
			worksheet.getCell('E3').value = "Amount";
			worksheet.getCell('E3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

			

			for (let i = 0; i < manuTools.length; i++) {

				let temp = i + 4;

				worksheet.mergeCells('A' + temp);
				worksheet.getCell('A' + temp).value = manuTools[i].itemid;
				worksheet.getCell('A' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('B' + temp);
				worksheet.getCell('B' + temp).value = manuTools[i].itemcode;
				worksheet.getCell('B' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('C' + temp);
				worksheet.getCell('C' + temp).value = manuTools[i].quantity;
				worksheet.getCell('C' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('D' + temp);
				worksheet.getCell('D' + temp).value = manuTools[i].rate;
				worksheet.getCell('D' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('E' + temp);
				worksheet.getCell('E' + temp).value = manuTools[i].amount;
				worksheet.getCell('E' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

			}


			return workbook.xlsx.write(response).then(function () {
				response['status'](200).end();
			});

		}
	}
}