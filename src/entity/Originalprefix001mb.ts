import { OriginalPrefixDTO } from "src/dto/Originalprefix.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Measurement001wb } from "./Measurement001wb";

@Entity("originalprefix001mb", { schema: "saturo" })
export class Originalprefix001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "originalPrefix", length: 20 })
  originalPrefix: string;

  @OneToMany(
    () => Measurement001wb,
    (measurement001wb) => measurement001wb.originalPrefixSlno2
  )
  measurement001wbs: Measurement001wb[];



  setProperties(originalPrefixDTO: OriginalPrefixDTO) {
    this.id = originalPrefixDTO.id;
    this.originalPrefix = originalPrefixDTO.originalPrefix;
}
}
