import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Toolcontroller } from 'src/controller/manu-tool.controller';
import { Itemdt001mb } from 'src/entity/Itemdt001mb';

import { Toolservice } from 'src/service/manu-tool.service';

@Module({
    imports: [TypeOrmModule.forFeature([Itemdt001mb])],
    providers: [Toolservice],
    controllers: [Toolcontroller],
})

export class ToolsModule { }