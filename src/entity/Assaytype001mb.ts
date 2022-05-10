import { AssayTypeDTO } from "src/dto/Assaytype.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Assay001wb } from "./Assay001wb";

@Entity("assaytype001mb", { schema: "saturo" })
export class Assaytype001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "assayType", length: 30 })
  assayType: string;

  @OneToMany(() => Assay001wb, (assay001wb) => assay001wb.assayTypeSlno2)
  assay001wbs: Assay001wb[];

  setProperties(assayTypeDTO: AssayTypeDTO) {
    this.id = assayTypeDTO.id;
    this.assayType = assayTypeDTO.assayType;
  }
}
