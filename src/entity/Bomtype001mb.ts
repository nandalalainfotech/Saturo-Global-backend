import { BomtypeDTO } from "src/dto/Bomtype.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bomtype001mb", { schema: "saturo" })
export class Bomtype001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "bomId" })
  bomId: number;

  @Column("varchar", { name: "bomName", length: 100 })
  bomName: string;

  @Column("varchar", { name: "bomType", nullable: true, length: 40 })
  bomType: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(bomtypeDTO: BomtypeDTO) {
    this.bomId = bomtypeDTO.bomId;
    this.bomName = bomtypeDTO.bomName;
    this.bomType = bomtypeDTO.bomType;
    this.insertUser = bomtypeDTO.insertUser;
    this.insertDatetime = bomtypeDTO.insertDatetime;
    this.updatedUser = bomtypeDTO.updatedUser;
    this.updatedDatetime = bomtypeDTO.updatedDatetime;
}
}
