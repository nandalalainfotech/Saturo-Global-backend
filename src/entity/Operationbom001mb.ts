import { OperationbomDTO } from "src/dto/Operationbom.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("operationbom001mb", { schema: "saturo" })
export class Operationbom001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "opId" })
  opId: number;

  @Column("varchar", { name: "opName", length: 50 })
  opName: string;

  @Column("varchar", { name: "workstName", length: 50 })
  workstName: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(operationbomDTO: OperationbomDTO) {
    this.opId = operationbomDTO.opId;
    this.opName = operationbomDTO.opName;
    this.workstName = operationbomDTO.workstName;
    this.insertUser = operationbomDTO.insertUser;
    this.insertDatetime = operationbomDTO.insertDatetime;
    this.updatedUser = operationbomDTO.updatedUser;
    this.updatedDatetime = operationbomDTO.updatedDatetime;
}
}
