import { RouteOfAdministartionDTO } from "src/dto/Routeofadministration.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Assay001wb } from "./Assay001wb";

@Entity("routeofadministration001mb", { schema: "saturo" })
export class Routeofadministration001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "route", length: 20 })
  route: string;

  @OneToMany(() => Assay001wb, (assay001wb) => assay001wb.routeSlno2)
  assay001wbs: Assay001wb[];



  setProperties(routeOfAdministartionDTO: RouteOfAdministartionDTO) {
    this.id = routeOfAdministartionDTO.id;
    this.route = routeOfAdministartionDTO.route;
}
}
