import { LigandVersionDTO } from "src/dto/Ligandversion.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Assay001wb } from "./Assay001wb";
import { Ligand001wb } from "./Ligand001wb";

@Entity("ligandversion001mb", { schema: "saturo" })
export class Ligandversion001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "ligandVersion", length: 30 })
  ligandVersion: string;

  @OneToMany(() => Assay001wb, (assay001wb) => assay001wb.ligandVersionSlno2)
  assay001wbs: Assay001wb[];

  @OneToMany(() => Ligand001wb, (ligand001wb) => ligand001wb.ligandVersionSlno2)
  ligand001wbs: Ligand001wb[];


  setProperties(ligandVersionDTO: LigandVersionDTO) {
    this.id = ligandVersionDTO.id;
    this.ligandVersion = ligandVersionDTO.ligandVersion;
}
}
