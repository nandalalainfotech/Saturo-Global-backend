import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdStockController } from 'src/controller/prod-stack.controller';
import { Prodstockentry001mb } from 'src/entity/Prodstockentry001mb';
import { ProdStockService } from 'src/service/prod-stack.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prodstockentry001mb])],
  providers: [ProdStockService],
  controllers: [ProdStockController],
})
export class ProdStockModule {}
