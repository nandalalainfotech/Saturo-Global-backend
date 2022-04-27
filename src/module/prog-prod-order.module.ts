import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgProdOrderController } from 'src/controller/prog-prod-order.controller';
import { Progprodorder001mb } from 'src/entity/Progprodorder001mb.entity';
import { ProgProdOrderService } from 'src/service/prog-prod-order.service';


@Module({
  imports: [TypeOrmModule.forFeature([Progprodorder001mb])],
  providers: [ProgProdOrderService],
  controllers: [ProgProdOrderController],
})
export class ProgProdOrderModule { }
