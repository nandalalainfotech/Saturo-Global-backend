import { BomDTO } from "src/dto/Bom.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bom001mb", { schema: "saturo" })
export class Bom001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "bom", length: 45 })
  bom: string;

  @Column("varchar", { name: "type", length: 45 })
  type: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(bomDTO: BomDTO) {
    this.id = bomDTO.id;
    this.bom = bomDTO.bom;
    this.type = bomDTO.type;
    this.insertUser = bomDTO.insertUser;
    this.insertDatetime = bomDTO.insertDatetime;
    this.updatedUser = bomDTO.updatedUser;
    this.updatedDatetime = bomDTO.updatedDatetime;
}
}
