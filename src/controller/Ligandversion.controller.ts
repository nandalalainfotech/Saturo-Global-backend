import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { LigandVersionDTO } from "src/dto/Ligandversion.dto";
import { Ligandversion001mb } from "src/entity/Ligandversion001mb";
import { LigandVersionService } from "src/service/Ligandversion.service";

@Controller('/testandreportstudio/api/activity')
export class LigandVersionController {
	constructor(private readonly ligandVersionService: LigandVersionService) { }
	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() ligandVersionDTO: LigandVersionDTO): Promise<Ligandversion001mb> {
		return this.ligandVersionService.create(ligandVersionDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() ligandVersionDTO: LigandVersionDTO): Promise<Ligandversion001mb> {
		return this.ligandVersionService.update(ligandVersionDTO);
	}
	
	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Ligandversion001mb[]> {
		return this.ligandVersionService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:slNo')
	remove(@Param('slNo') slNo: number): Promise<void> {
		return this.ligandVersionService.remove(slNo);
	}
    
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Ligandversion001mb> {
		return this.ligandVersionService.findOne(id);
	}
}