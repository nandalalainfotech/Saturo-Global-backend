import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UnitHighEndValueController } from "src/controller/Unithighendvalue.controller";
import { Unithighendvalue001mb } from "src/entity/Unithighendvalue001mb";
import { UnitHighEndValueService } from "src/service/Unithighendvalue.service";

@Module({
    imports: [TypeOrmModule.forFeature([Unithighendvalue001mb])],
    providers: [UnitHighEndValueService],
    controllers: [UnitHighEndValueController],
})
export class UnitHighEndValueModule { }