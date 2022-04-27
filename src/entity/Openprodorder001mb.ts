import { OpenprodorderDTO } from "src/dto/Openprodorder.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("openprodorder001mb", { schema: "saturo" })
export class Openprodorder001mb {
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

  setProperties(openprodorderDTO: OpenprodorderDTO) {
    this.prodId = openprodorderDTO.prodId;
    this.prorderCode = openprodorderDTO.prorderCode;
    this.date = openprodorderDTO.date;
    this.itemtoManufacture = openprodorderDTO.itemtoManufacture;
    this.toProduce = openprodorderDTO.toProduce;
    this.produced = openprodorderDTO.produced;
    this.empCompany = openprodorderDTO.empCompany;
    this.insertUser = openprodorderDTO.insertUser;
    this.insertDatetime = openprodorderDTO.insertDatetime;
    this.updatedUser = openprodorderDTO.updatedUser;
    this.updatedDatetime = openprodorderDTO.updatedDatetime;
}
}
