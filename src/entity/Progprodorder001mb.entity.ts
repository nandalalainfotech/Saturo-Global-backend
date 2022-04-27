import { ProgprodorderDTO } from "src/dto/Progprodorder.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("progprodorder001mb")
export class Progprodorder001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "prodId" })
    prodId: number;

    @Column("varchar", { name: "prorderCode", length: 30 })
    prorderCode: string;

    @Column("datetime", { name: "date" })
    date: Date;

    @Column("varchar", { name: "itemtoManufacture", length: 40 })
    itemtoManufacture: string;

    @Column("varchar", { name: "toProduce", nullable: true, length: 30 })
    toProduce: string | null;

    @Column("varchar", { name: "produced", length: 30 })
    produced: string;

    @Column("varchar", { name: "empCompany", length: 30 })
    empCompany: string;

    setProperties(progprodorderDTO: ProgprodorderDTO) {
        this.prodId = progprodorderDTO.prodId;
        this.prorderCode = progprodorderDTO.prorderCode;
        this.date = progprodorderDTO.date;
        this.itemtoManufacture = progprodorderDTO.itemtoManufacture;
        this.toProduce = progprodorderDTO.toProduce;
        this.produced = progprodorderDTO.produced;
        this.empCompany = progprodorderDTO.empCompany;
        this.insertUser = progprodorderDTO.insertUser;
        this.insertDatetime = progprodorderDTO.insertDatetime;
        this.updatedUser = progprodorderDTO.updatedUser;
        this.updatedDatetime = progprodorderDTO.updatedDatetime;
    }
}
