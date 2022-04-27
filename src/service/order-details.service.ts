import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderDTO } from "src/dto/Order.dto";
import { Order001mb } from "src/entity/Order001mb";

import { Repository } from "typeorm";

@Injectable()

export class OrderDetailsService {

    constructor (@InjectRepository(Order001mb) private readonly orderDetailsRepository: Repository<Order001mb>) {}

    async create(orderDTO: OrderDTO): Promise<Order001mb> {
        const  order001mb = new Order001mb();
        order001mb.setProperties(orderDTO);
        return this.orderDetailsRepository.save(order001mb);
    }

    async update(orderDTO: OrderDTO): Promise<Order001mb> {
        const order001mb = new Order001mb();
        order001mb.setProperties(orderDTO);
        await this.orderDetailsRepository.update({orderid: order001mb.orderid}, order001mb);
        return order001mb;
    }

    async findAll(): Promise<Order001mb[]> {
        return this.orderDetailsRepository.find();
    }

    findOne(id: string): Promise<Order001mb> {
        return this.orderDetailsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.orderDetailsRepository.delete(id);
    }
}