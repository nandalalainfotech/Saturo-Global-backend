import { GenderDTO } from "src/dto/Gender.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Measurement001wb } from "./Measurement001wb";

@Entity("gender001mb", { schema: "saturo" })
export class Gender001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "gender", length: 20 })
  gender: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @OneToMany(
    () => Measurement001wb,
    (measurement001wb) => measurement001wb.genderSlno2
  )
  measurement001wbs: Measurement001wb[];


  setProperties(genderDTO: GenderDTO) {
    this.id = genderDTO.id;
    this.gender = genderDTO.gender;
    this.insertUser = genderDTO.insertUser;
    this.insertDatetime = genderDTO.insertDatetime;
    this.updatedUser = genderDTO.updatedUser;
    this.updatedDatetime = genderDTO.updatedDatetime;
  }
}
