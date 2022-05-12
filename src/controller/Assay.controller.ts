import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { AssayDTO } from "src/dto/Assay.dto";
import { Assay001wb } from "src/entity/Assay001wb";
import { AssayService } from "src/service/Assay.service";

@Controller('/testandreportstudio/api/assay')
export class AssayController {
    constructor(private readonly assayService: AssayService) { }
	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() assayDTO: AssayDTO): Promise<Assay001wb> {
		return this.assayService.create(assayDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() assayDTO: AssayDTO): Promise<Assay001wb> {
		return this.assayService.update(assayDTO);
	}
	
	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Assay001wb[]> {
		return this.assayService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:assayId')
	remove(@Param('assayId') assayId: number): Promise<void> {
		return this.assayService.remove(assayId);
	}
    
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Assay001wb> {
		return this.assayService.findOne(id);
	}
}