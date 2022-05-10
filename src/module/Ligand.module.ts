import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LigandController } from "src/controller/Ligand.controller";
import { Ligand001wb } from "src/entity/Ligand001wb";
import { LigandService } from "src/service/Ligand.service";

@Module({
    imports: [TypeOrmModule.forFeature([Ligand001wb])],
    providers: [LigandService],
    controllers: [LigandController],
})
export class LigandModule { }