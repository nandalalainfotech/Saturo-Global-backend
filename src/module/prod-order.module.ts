import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdOrderController } from 'src/controller/prod-order.controller';
import { Prodorder001mb } from 'src/entity/Prodorder001mb';

import { ProdOrderService } from 'src/service/prod-order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prodorder001mb])],
  providers: [ProdOrderService],
  controllers: [ProdOrderController],
})
export class ProdOrderModule {}
