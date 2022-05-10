import { GenderDTO } from "src/dto/Gender.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Measurement001wb } from "./Measurement001wb";

@Entity("gender001mb", { schema: "saturo" })
export class Gender001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "gender", length: 20 })
  gender: string;

  @OneToMany(
    () => Measurement001wb,
    (measurement001wb) => measurement001wb.genderSlno2
  )
  measurement001wbs: Measurement001wb[];


  setProperties(genderDTO: GenderDTO) {
    this.id = genderDTO.id;
    this.gender = genderDTO.gender;
  }
}
