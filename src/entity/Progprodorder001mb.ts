import { ProgprodorderDTO } from "src/dto/Progprodorder.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("progprodorder001mb", { schema: "saturo" })
export class Progprodorder001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "prodId" })
  prodId: number;

  @Column("varchar", { name: "prorderCode", length: 30 })
  prorderCode: string;

  @Column("varchar", { name: "itemtoManufacture", length: 40 })
  itemtoManufacture: string;

  @Column("varchar", { name: "toProduce", nullable: true, length: 30 })
  toProduce: string | null;

  @Column("varchar", { name: "produced", length: 30 })
  produced: string;

  @Column("varchar", { name: "empCompany", length: 30 })
  empCompany: string;

  @Column("datetime", { name: "date" })
  date: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

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
