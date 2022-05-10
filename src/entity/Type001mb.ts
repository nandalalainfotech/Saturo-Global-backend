import { TypeDTO } from "src/dto/Type.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Measurement001wb } from "./Measurement001wb";

@Entity("type001mb", { schema: "saturo" })
export class Type001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "type", length: 50 })
  type: string;

  @OneToMany(
    () => Measurement001wb,
    (measurement001wb) => measurement001wb.typeSlno2
  )
  measurement001wbs: Measurement001wb[];


  setProperties(typeDTO: TypeDTO) {
    this.id = typeDTO.id;
    this.type = typeDTO.type;
}
}
