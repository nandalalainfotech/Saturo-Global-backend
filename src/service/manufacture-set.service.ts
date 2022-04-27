import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ManufacturesetDTO } from "src/dto/Manufactureset.dto";

import { Repository } from "typeorm";
import { Request } from "supertest";
import { Response } from "express";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");
import { createReadStream } from "fs";
import { Manufactureset001mb } from "src/entity/Manufactureset001mb";
var html = fs.readFileSync("manu-setup.html", "utf8");

@Injectable()
export class ManufactureSetService {
    constructor(@InjectRepository(Manufactureset001mb) private readonly manufacturesetRepository: Repository<Manufactureset001mb>,) { }

    async create(manufacturesetDTO: ManufacturesetDTO): Promise<Manufactureset001mb> {
        const manufactureset001mb = new Manufactureset001mb();
        manufactureset001mb.setProperties(manufacturesetDTO);
        return this.manufacturesetRepository.save(manufactureset001mb);
    }
    async update(manufacturesetDTO: ManufacturesetDTO): Promise<Manufactureset001mb> {
        const manufactureset001mb = new Manufactureset001mb();
        manufactureset001mb.setProperties(manufacturesetDTO);
        await this.manufacturesetRepository.update({ mansetId: manufactureset001mb.mansetId }, manufactureset001mb);
        return manufactureset001mb;
    }
    async findAll(): Promise<Manufactureset001mb[]> {
        return this.manufacturesetRepository.find();
    }
    findOne(id: string): Promise<Manufactureset001mb> {
        return this.manufacturesetRepository.findOne(id);
    }
    async remove(id: string): Promise<void> {
        await this.manufacturesetRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let manuSetup: any[] = await this.manufacturesetRepository.find();
       

        var document = {
            html: html,
            data: {
                ManuSetup: manuSetup,
            },
            path: path.join(`./pdf/manuSetup.pdf`),
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
        if (manuSetup.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "manuSetup.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let manuSetup = await this.manufacturesetRepository.find();
        

        if (manuSetup.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('manuSetup');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 },
            { key: 'D', width: 25.0 }, { key: 'E', width: 25.0 }, { key: 'F', width: 25.0 }, { key: 'G', width: 20.0 }
                , { key: 'H', width: 25.0 }, { key: 'I', width: 25.0 }, { key: 'J', width: 25.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })
            worksheet.mergeCells('A1:J1');
            worksheet.getCell('A1:J1').value = "NANDALALA ERP";
            worksheet.getCell('A1:J1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:J1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:J1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:J2');
            worksheet.getCell('A2:J2').value = "Manufacture Setup";
            worksheet.getCell('A2:J2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:J2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Disable CP and TT";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Allow Overtime";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Holiday Production ";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Production Percentage";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('F3');
            worksheet.getCell('F3').value = "BackFlush Raw Materials ";
            worksheet.getCell('F3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('G3');
            worksheet.getCell('G3').value = "Capacity Planned";
            worksheet.getCell('G3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('H3');
            worksheet.getCell('H3').value = "Time B/W Operation";
            worksheet.getCell('H3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('H3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('I3');
            worksheet.getCell('I3').value = "Default Progress Work";
            worksheet.getCell('I3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('I3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('J3');
            worksheet.getCell('J3').value = "Default Finished Work";
            worksheet.getCell('J3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('J3').alignment = { vertical: 'middle', horizontal: 'center' };


            for (let i = 0; i < manuSetup.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = manuSetup[i].mansetId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = manuSetup[i].disableCPandTt;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = manuSetup[i].allowOt;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = manuSetup[i].allowProdinholy;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = manuSetup[i].prodPercent;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = manuSetup[i].backflushRm;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = manuSetup[i].capacityPlan;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('H' + temp);
                worksheet.getCell('H' + temp).value = manuSetup[i].timebwOpern;
                worksheet.getCell('H' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('H' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('I' + temp);
                worksheet.getCell('I' + temp).value = manuSetup[i].defworkinProgWh;
                worksheet.getCell('I' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('I' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('J' + temp);
                worksheet.getCell('J' + temp).value = manuSetup[i].defFingoodsWh;
                worksheet.getCell('J' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('J' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }


}