import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { Request } from "supertest";
import { Response } from "express";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");
import { createReadStream } from "fs";
import { Workstation001mb } from "src/entity/Workstation001mb.entity";
import { WorkstationDTO } from "src/dto/Workstation.dto";
var html = fs.readFileSync("workStation.html", "utf8");

@Injectable()

export class WorkStationService {
    constructor(@InjectRepository(Workstation001mb) private readonly WorkStationRepository: Repository<Workstation001mb>) { }

    async create(workstationDTO: WorkstationDTO): Promise<Workstation001mb> {
        const workstation001mb = new Workstation001mb();
        workstation001mb.setProperties(workstationDTO);
        return this.WorkStationRepository.save(workstation001mb);
    }

    async update(workstationDTO: WorkstationDTO): Promise<Workstation001mb> {
        const workstation001mb = new Workstation001mb();
        workstation001mb.setProperties(workstationDTO);
        await this.WorkStationRepository.update({ workstId: workstation001mb.workstId }, workstation001mb);
        return workstation001mb;
    }

    async findAll(): Promise<Workstation001mb[]> {
        return this.WorkStationRepository.find();
    }

    findOne(id: string): Promise<Workstation001mb> {
        return this.WorkStationRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.WorkStationRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let workStation: any[] = await this.WorkStationRepository.find();
        // console.log("backend materials-service for pdf----->", materials);

        var document = {
            html: html,
            data: {
                WorkStation: workStation,
            },
            path: path.join(`./pdf/workStation.pdf`),
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
        if (workStation.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "workStation.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };
    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let workStation = await this.WorkStationRepository.find();
        // console.log("backend workStation-service----->", workStation);

        if (workStation.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('workStation');
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
            worksheet.columns = [{ key: 'A', width: 25.0 }, { key: 'B', width: 50.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })
            worksheet.mergeCells('A1:B1');
            worksheet.getCell('A1:B1').value = "NANDALALA ERP";
            worksheet.getCell('A1:B1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:B1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:B1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:B2');
            worksheet.getCell('A2:B2').value = "Work Station";
            worksheet.getCell('A2:B2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:B2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Work Station";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            for (let i = 0; i < workStation.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = workStation[i].workstId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = workStation[i].workstName;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };
            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }


}