import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { LigandDTO } from "src/dto/Ligand.dto";
import { Ligand001wb } from "src/entity/Ligand001wb";
import { LigandService } from "src/service/Ligand.service";

@Controller('/testandreportstudio/api/ligand')
export class LigandController {
	constructor(private readonly ligandService: LigandService) { }
	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() ligandDTO: LigandDTO): Promise<Ligand001wb> {
		return this.ligandService.create(ligandDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() ligandDTO: LigandDTO): Promise<Ligand001wb> {
		return this.ligandService.update(ligandDTO);
	}
	
	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Ligand001wb[]> {
		return this.ligandService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:slNo')
	remove(@Param('slNo') slNo: number): Promise<void> {
		return this.ligandService.remove(slNo);
	}
    
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Ligand001wb> {
		return this.ligandService.findOne(id);
	}
}