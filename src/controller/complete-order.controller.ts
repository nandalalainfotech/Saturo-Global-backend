import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CompprodorderDTO } from 'src/dto/Compprodorder.dto';
import { Compprodorder001mb } from 'src/entity/Compprodorder001mb';
import { CompleteOrderService } from 'src/service/complete-order.service';



@Controller('/testandreportstudio/api/compprodorder')
export class CompleteOrderController {
    constructor(private readonly completeOrderService: CompleteOrderService) { }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() compprodorderDTO: CompprodorderDTO): Promise<Compprodorder001mb> {
        return this.completeOrderService.create(compprodorderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() compprodorderDTO: CompprodorderDTO): Promise<Compprodorder001mb> {
        return this.completeOrderService.update(compprodorderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Compprodorder001mb[]> {
        return this.completeOrderService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Compprodorder001mb> {
        return this.completeOrderService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.completeOrderService.remove(id);
    }
}
