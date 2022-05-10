import { UnitlowendvalueDTO } from "src/dto/Unitlowendvalue.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Assay001wb } from "./Assay001wb";

@Entity("unitlowendvalue001mb", { schema: "saturo" })
export class Unitlowendvalue001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "united", length: 30 })
  united: string;

  @OneToMany(() => Assay001wb, (assay001wb) => assay001wb.unitedSlno2)
  assay001wbs: Assay001wb[];


  setProperties(unitlowendvalueDTO: UnitlowendvalueDTO) {
    this.id = unitlowendvalueDTO.id;
    this.united = unitlowendvalueDTO.united;
  }
}
