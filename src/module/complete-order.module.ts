import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompleteOrderController } from 'src/controller/complete-order.controller';
import { Compprodorder001mb } from 'src/entity/Compprodorder001mb';
import { CompleteOrderService } from 'src/service/complete-order.service';


@Module({
    imports: [TypeOrmModule.forFeature([Compprodorder001mb])],
    providers: [CompleteOrderService],
    controllers: [CompleteOrderController],
})
export class CompleteOrderModule { }