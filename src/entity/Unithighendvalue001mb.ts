import { UnitHighEndValueDTO } from "src/dto/Unithighendvalue.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Assay001wb } from "./Assay001wb";

@Entity("unithighendvalue001mb", { schema: "saturo" })
export class Unithighendvalue001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "units", length: 30 })
  units: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @OneToMany(() => Assay001wb, (assay001wb) => assay001wb.unitsSlno2)
  assay001wbs: Assay001wb[];



  setProperties(unitHighEndValueDTO: UnitHighEndValueDTO) {
    this.id = unitHighEndValueDTO.id;
    this.units = unitHighEndValueDTO.units;
    this.insertUser = unitHighEndValueDTO.insertUser;
    this.insertDatetime = unitHighEndValueDTO.insertDatetime;
    this.updatedUser = unitHighEndValueDTO.updatedUser;
    this.updatedDatetime = unitHighEndValueDTO.updatedDatetime;
}
}
