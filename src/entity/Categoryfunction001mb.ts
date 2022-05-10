import { CategoryFunctionDTO } from "src/dto/Categoryfunction.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Measurement001wb } from "./Measurement001wb";

@Entity("categoryfunction001mb", { schema: "saturo" })
export class Categoryfunction001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "function", length: 100 })
  function: string;

  @OneToMany(
    () => Measurement001wb,
    (measurement001wb) => measurement001wb.functionSlno2
  )
  measurement001wbs: Measurement001wb[];



  setProperties(categoryFunctionDTO: CategoryFunctionDTO) {
    this.id = categoryFunctionDTO.id;
    this.function = categoryFunctionDTO.function;
  }
}
