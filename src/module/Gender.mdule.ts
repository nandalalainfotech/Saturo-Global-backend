import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GenderController } from "src/controller/Gender.controller";
import { Gender001mb } from "src/entity/Gender001mb";
import { GenderService } from "src/service/Gender.service";

@Module({
    imports: [TypeOrmModule.forFeature([Gender001mb])],
    providers: [GenderService],
    controllers: [GenderController],
})
export class GenderModule { }