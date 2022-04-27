import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReqitemorderDTO } from 'src/dto/Reqitemorder.dto';
import { Reqitemorder001mb } from 'src/entity/Reqitemorder001mb';

import { ItemOrderedService } from 'src/service/item-ordered.service';


@Controller('/testandreportstudio/api/itemorder')
export class ItemOrderedController {
    constructor(private readonly itemOrderedService: ItemOrderedService) {}
   
    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() reqitemorderDTO: ReqitemorderDTO): Promise<Reqitemorder001mb> {
        return this.itemOrderedService.create(reqitemorderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() reqitemorderDTO: ReqitemorderDTO): Promise<Reqitemorder001mb> {
        return this.itemOrderedService.update(reqitemorderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Reqitemorder001mb[]> {
        return this.itemOrderedService.findAll();
    } 

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Reqitemorder001mb> {
        return this.itemOrderedService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.itemOrderedService.remove(id);
    }
}