import { CompprodorderDTO } from "src/dto/Compprodorder.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("compprodorder001mb", { schema: "saturo" })
export class Compprodorder001mb {
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

  setProperties(compprodorderDTO: CompprodorderDTO) {
    this.prodId = compprodorderDTO.prodId;
    this.prorderCode = compprodorderDTO.prorderCode;
    this.date = compprodorderDTO.date;
    this.itemtoManufacture = compprodorderDTO.itemtoManufacture;
    this.toProduce = compprodorderDTO.toProduce;
    this.produced = compprodorderDTO.produced;
    this.empCompany = compprodorderDTO.empCompany;
    this.insertUser = compprodorderDTO.insertUser;
    this.insertDatetime = compprodorderDTO.insertDatetime;
    this.updatedUser = compprodorderDTO.updatedUser;
    this.updatedDatetime = compprodorderDTO.updatedDatetime;
}
}
