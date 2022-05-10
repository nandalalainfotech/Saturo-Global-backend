import { LigandTypeDTO } from "src/dto/Ligandtype.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ligand001wb } from "./Ligand001wb";

@Entity("ligandtype001mb", { schema: "saturo" })
export class Ligandtype001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "ligandtype", length: 30 })
  ligandtype: string;

  @OneToMany(() => Ligand001wb, (ligand001wb) => ligand001wb.ligandTypeSlno2)
  ligand001wbs: Ligand001wb[];


  setProperties(ligandTypeDTO: LigandTypeDTO) {
    this.id = ligandTypeDTO.id;
    this.ligandtype = ligandTypeDTO.ligandtype;
  }
}
