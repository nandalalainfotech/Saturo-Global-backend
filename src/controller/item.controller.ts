import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ItemdtDTO } from "src/dto/Itemdt.dto";
import { Itemdt001mb } from "src/entity/Itemdt001mb";
import { Itemservice } from "src/service/item.service";

@Controller('/testandreportstudio/api/item')

export class Itemcontroller {

    constructor(private readonly itemservice: Itemservice) { }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        return this.itemservice.create(itemdtDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        return this.itemservice.create(itemdtDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Itemdt001mb[]> {
        return this.itemservice.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Itemdt001mb> {
        return this.itemservice.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.itemservice.remove(id);
    }

}