import { UnitSingleValueDTO } from "src/dto/Unitsinglevalue.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Assay001wb } from "./Assay001wb";

@Entity("unitsinglevalue001mb", { schema: "saturo" })
export class Unitsinglevalue001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "unit", length: 30 })
  unit: string;

  @OneToMany(() => Assay001wb, (assay001wb) => assay001wb.unitSlno2)
  assay001wbs: Assay001wb[];


  setProperties(unitSingleValueDTO: UnitSingleValueDTO) {
    this.id = unitSingleValueDTO.id;
    this.unit = unitSingleValueDTO.unit;
}
}
