import { ItemdtDTO } from "src/dto/Itemdt.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Itemcode", ["itemcode"], { unique: true })
@Index("IDX_edae62f88dd06a0f27b760ad00", ["itemcode"], { unique: true })
@Entity("itemdt001mb", { schema: "saturo" })
export class Itemdt001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Itemid" })
  itemid: number;

  @Column("varchar", {
    name: "Itemcode",
    nullable: true,
    unique: true,
    length: 50,
  })
  itemcode: string | null;

  @Column("smallint", { name: "Quantity" })
  quantity: number;

  @Column("decimal", { name: "Rate", nullable: true, precision: 12, scale: 4 })
  rate: string | null;

  @Column("decimal", {
    name: "Amount",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  amount: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(itemdtDTO: ItemdtDTO) {
    this.itemid = itemdtDTO.itemid;
    this.itemcode = itemdtDTO.itemcode;
    this.quantity = itemdtDTO.quantity;
    this.rate = itemdtDTO.rate;
    this.amount = itemdtDTO.amount;
    this.insertUser = itemdtDTO.insertUser;
    this.insertDatetime = itemdtDTO.insertDatetime;
    this.updatedUser = itemdtDTO.updatedUser;
    this.updatedDatetime = itemdtDTO.updatedDatetime;
}
}
