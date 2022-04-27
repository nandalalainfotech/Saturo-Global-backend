import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { OrderDTO } from "src/dto/Order.dto";
import { Order001mb } from "src/entity/Order001mb";

import { OrderDetailsService } from "src/service/order-details.service";

@Controller('/testandreportstudio/api/orderdetails')

export class OrderDetailsController {

    constructor (private readonly orderDetailsService: OrderDetailsService) {}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() orderDTO: OrderDTO): Promise<Order001mb> {
        return this.orderDetailsService.create(orderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() orderDTO: OrderDTO): Promise<Order001mb> {
        return this.orderDetailsService.update(orderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Order001mb[]> {
        return this.orderDetailsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Order001mb> {
        return this.orderDetailsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.orderDetailsService.remove(id);
    }
}