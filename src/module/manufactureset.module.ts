import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";
import { Module } from '@nestjs/common';


import { ManufactureSetService } from "src/service/manufacture-set.service";
import { ManufactureSetController } from "src/controller/manufacture-set.controller";
import { Manufactureset001mb } from "src/entity/Manufactureset001mb";

@Module({
    imports: [TypeOrmModule.forFeature([Manufactureset001mb])],
    providers: [ManufactureSetService],
    controllers: [ManufactureSetController],
  })
  export class ManufacturesetModule {}
  