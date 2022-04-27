import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdTimeSheetController } from 'src/controller/prod-time-sheet.controller';
import { Prodtimesheet001mb } from 'src/entity/Prodtimesheet001mb';

import { ProdTimeSheetService } from 'src/service/prod-timest.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prodtimesheet001mb])],
  providers: [ProdTimeSheetService],
  controllers: [ProdTimeSheetController],
})
export class ProdTimeSheetModule {}
