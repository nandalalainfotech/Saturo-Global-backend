import { ItemstDTO } from "src/dto/Itemst.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("itemst001mb", { schema: "saturo" })
export class Itemst001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "itemstId" })
  itemstId: number;

  @Column("varchar", { name: "itemcode", length: 50 })
  itemcode: string;

  @Column("varchar", { name: "status", length: 30 })
  status: string;

  @Column("varchar", { name: "itemGroup", length: 40 })
  itemGroup: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(itemstDTO: ItemstDTO) {
    this.itemstId = itemstDTO.itemstId;
    this.itemcode = itemstDTO.itemcode;
    this.status = itemstDTO.status;
    this.itemGroup = itemstDTO.itemGroup;
    this.insertUser = itemstDTO.insertUser;
    this.insertDatetime = itemstDTO.insertDatetime;
    this.updatedUser = itemstDTO.updatedUser;
    this.updatedDatetime = itemstDTO.updatedDatetime;
}
}
