import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { UnitHighEndValueDTO } from "src/dto/Unithighendvalue.dto";
import { Unithighendvalue001mb } from "src/entity/Unithighendvalue001mb";
import { UnitHighEndValueService } from "src/service/Unithighendvalue.service";

@Controller('/testandreportstudio/api/activity')
export class UnitHighEndValueController {
	constructor(private readonly unitHighEndValueService: UnitHighEndValueService) { }
	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() unitHighEndValueDTO: UnitHighEndValueDTO): Promise<Unithighendvalue001mb> {
		return this.unitHighEndValueService.create(unitHighEndValueDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() unitHighEndValueDTO: UnitHighEndValueDTO): Promise<Unithighendvalue001mb> {
		return this.unitHighEndValueService.update(unitHighEndValueDTO);
	}
	
	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<UnitHighEndValueDTO[]> {
		return this.unitHighEndValueService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:slNo')
	remove(@Param('slNo') slNo: number): Promise<void> {
		return this.unitHighEndValueService.remove(slNo);
	}
    
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Unithighendvalue001mb> {
		return this.unitHighEndValueService.findOne(id);
	}
}