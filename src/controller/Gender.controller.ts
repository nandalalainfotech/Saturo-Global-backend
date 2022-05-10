import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { GenderDTO } from "src/dto/Gender.dto";
import { Gender001mb } from "src/entity/Gender001mb";
import { GenderService } from "src/service/Gender.service";

@Controller('/testandreportstudio/api/activity')
export class  GenderController {
	constructor(private readonly genderService: GenderService) { }
	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() genderDTO: GenderDTO): Promise<Gender001mb> {
		return this.genderService.create(genderDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() genderDTO: GenderDTO): Promise<Gender001mb> {
		return this.genderService.update(genderDTO);
	}
	
	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Gender001mb[]> {
		return this.genderService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:slNo')
	remove(@Param('slNo') slNo: number): Promise<void> {
		return this.genderService.remove(slNo);
	}
    
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Gender001mb> {
		return this.genderService.findOne(id);
	}
}