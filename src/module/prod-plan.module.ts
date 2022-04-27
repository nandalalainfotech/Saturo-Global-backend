import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdPlanController } from 'src/controller/prod-plan.controller';
import { Prodplan001mb } from 'src/entity/Prodplan001mb';

import { ProdPlanService } from 'src/service/prod-plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prodplan001mb])],
  providers: [ProdPlanService],
  controllers: [ProdPlanController],
})
export class ProdPlanModule {}
