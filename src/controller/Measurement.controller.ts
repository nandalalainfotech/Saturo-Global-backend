import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { MeasurementDTO } from "src/dto/Measurement.dto";
import { Measurement001wb } from "src/entity/Measurement001wb";
import { MeasurementService } from "src/service/Measurement.service";

@Controller('/testandreportstudio/api/activity')
export class MeasurementController {
	constructor(private readonly measurementService: MeasurementService) { }
	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() measurementDTO: MeasurementDTO): Promise<Measurement001wb> {
		return this.measurementService.create(measurementDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() measurementDTO: MeasurementDTO): Promise<Measurement001wb> {
		return this.measurementService.update(measurementDTO);
	}
	
	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Measurement001wb[]> {
		return this.measurementService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:slNo')
	remove(@Param('slNo') slNo: number): Promise<void> {
		return this.measurementService.remove(slNo);
	}
    
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Measurement001wb> {
		return this.measurementService.findOne(id);
	}
}