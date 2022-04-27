import { ProdorderDTO } from "src/dto/Prodorder.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("prodorder001mb", { schema: "saturo" })
export class Prodorder001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "prId" })
  prId: number;

  @Column("varchar", { name: "itemtoManufacture", length: 40 })
  itemtoManufacture: string;

  @Column("varchar", { name: "status", length: 30 })
  status: string;

  @Column("varchar", { name: "prorderCode", length: 30 })
  prorderCode: string;

  @Column("varchar", { name: "insert_user", nullable: true, length: 15 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(prodorderDTO: ProdorderDTO) {
    this.prId = prodorderDTO.prId;
    this.itemtoManufacture = prodorderDTO.itemtoManufacture;
    this.status = prodorderDTO.status;
    this.prorderCode = prodorderDTO.prorderCode;
    this.insertUser = prodorderDTO.insertUser;
    this.insertDatetime = prodorderDTO.insertDatetime;
    this.updatedUser = prodorderDTO.updatedUser;
    this.updatedDatetime = prodorderDTO.updatedDatetime;
}
}
