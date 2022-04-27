import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenProdOrderController } from 'src/controller/open-prod-order.controller';
import { Openprodorder001mb } from 'src/entity/Openprodorder001mb';

import { OpenProdOrderService } from 'src/service/open-prod-order.service';



@Module({
    imports: [TypeOrmModule.forFeature([Openprodorder001mb])],
    providers: [OpenProdOrderService],
    controllers: [OpenProdOrderController],
})
export class OpenProdOrderModule { }