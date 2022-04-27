import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BomtypeDTO } from 'src/dto/Bomtype.dto';
import { Bomtype001mb } from 'src/entity/Bomtype001mb';
import { BomTypeService } from 'src/service/bom-type.service';


@Controller('/testandreportstudio/api/bomtype')
export class BomTypeController {
    constructor(private readonly bomTypeService: BomTypeService) { }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() bomtypeDTO: BomtypeDTO): Promise<Bomtype001mb> {
        return this.bomTypeService.create(bomtypeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() bomtypeDTO: BomtypeDTO): Promise<Bomtype001mb> {
        return this.bomTypeService.update(bomtypeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Bomtype001mb[]> {
        return this.bomTypeService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Bomtype001mb> {
        return this.bomTypeService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.bomTypeService.remove(id);
    }
}
