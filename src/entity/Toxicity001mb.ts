import { ToxicityDTO } from "src/dto/Toxicity.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Assay001wb } from "./Assay001wb";

@Entity("toxicity001mb", { schema: "saturo" })
export class Toxicity001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "toxiCity", length: 30 })
  toxiCity: string;

  @OneToMany(() => Assay001wb, (assay001wb) => assay001wb.toxiCitySlno2)
  assay001wbs: Assay001wb[];


  setProperties(toxicityDTO: ToxicityDTO) {
    this.id = toxicityDTO.id;
    this.toxiCity = toxicityDTO.toxiCity;
  }
}
