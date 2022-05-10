import { UnitHighEndValueDTO } from "src/dto/Unithighendvalue.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Assay001wb } from "./Assay001wb";

@Entity("unithighendvalue001mb", { schema: "saturo" })
export class Unithighendvalue001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "units", length: 30 })
  units: string;

  @OneToMany(() => Assay001wb, (assay001wb) => assay001wb.unitsSlno2)
  assay001wbs: Assay001wb[];



  setProperties(unitHighEndValueDTO: UnitHighEndValueDTO) {
    this.id = unitHighEndValueDTO.id;
    this.units = unitHighEndValueDTO.units;
}
}
