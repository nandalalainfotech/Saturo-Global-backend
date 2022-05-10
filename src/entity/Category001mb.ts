import { CategoryDTO } from "src/dto/Category.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Measurement001wb } from "./Measurement001wb";

@Entity("category001mb", { schema: "saturo" })
export class Category001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "category", length: 100 })
  category: string;

  @OneToMany(
    () => Measurement001wb,
    (measurement001wb) => measurement001wb.categorySlno2
  )
  measurement001wbs: Measurement001wb[];

  setProperties(categoryDTO: CategoryDTO) {
    this.id = categoryDTO.id;
    this.category = categoryDTO.category;
}

}
