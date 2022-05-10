import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Assaytype001mb } from "./Assaytype001mb";
import { Toxicity001mb } from "./Toxicity001mb";
import { Routeofadministration001mb } from "./Routeofadministration001mb";
import { Unitsinglevalue001mb } from "./Unitsinglevalue001mb";
import { Unithighendvalue001mb } from "./Unithighendvalue001mb";
import { Unitlowendvalue001mb } from "./Unitlowendvalue001mb";
import { Ligandversion001mb } from "./Ligandversion001mb";
import { AssayDTO } from "src/dto/Assay.dto";

@Index("assayType_slno", ["assayTypeSlno"], {})
@Index("toxiCity_slno", ["toxiCitySlno"], {})
@Index("route_slno", ["routeSlno"], {})
@Index("unit_slno", ["unitSlno"], {})
@Index("units_slno", ["unitsSlno"], {})
@Index("united_slno", ["unitedSlno"], {})
@Index("ligandVersion_slno", ["ligandVersionSlno"], {})
@Entity("assay001wb", { schema: "saturo" })
export class Assay001wb {
  @PrimaryGeneratedColumn({ type: "int", name: "assayId" })
  assayId: number;

  @Column("varchar", { name: "ordinal", length: 20 })
  ordinal: string;

  @Column("varchar", { name: "collectionId", length: 30 })
  collectionId: string;

  @Column("int", { name: "ligandVersion_slno" })
  ligandVersionSlno: number;

  @Column("int", { name: "assayType_slno" })
  assayTypeSlno: number;

  @Column("int", { name: "toxiCity_slno" })
  toxiCitySlno: number;

  @Column("int", { name: "route_slno" })
  routeSlno: number;

  @Column("varchar", { name: "ligandSvalue", length: 30 })
  ligandSvalue: string;

  @Column("int", { name: "unit_slno" })
  unitSlno: number;

  @Column("varchar", { name: "ligandHvalue", length: 20 })
  ligandHvalue: string;

  @Column("varchar", { name: "ligandLvalue", length: 30 })
  ligandLvalue: string;

  @Column("int", { name: "units_slno" })
  unitsSlno: number;

  @Column("varchar", { name: "administration", length: 50 })
  administration: string;

  @Column("varchar", { name: "procedure", length: 30 })
  procedure: string;

  @Column("varchar", { name: "target", length: 150 })
  target: string;

  @Column("varchar", { name: "conditionType", length: 100 })
  conditionType: string;

  @Column("varchar", { name: "conditionMaterial", length: 50 })
  conditionMaterial: string;

  @Column("varchar", { name: "conditionMaterialid", length: 30 })
  conditionMaterialid: string;

  @Column("varchar", { name: "value", length: 100 })
  value: string;

  @Column("int", { name: "united_slno" })
  unitedSlno: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToOne(
    () => Assaytype001mb,
    (assaytype001mb) => assaytype001mb.assay001wbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "assayType_slno", referencedColumnName: "id" }])
  assayTypeSlno2: Assaytype001mb;

  @ManyToOne(
    () => Toxicity001mb,
    (toxicity001mb) => toxicity001mb.assay001wbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "toxiCity_slno", referencedColumnName: "id" }])
  toxiCitySlno2: Toxicity001mb;

  @ManyToOne(
    () => Routeofadministration001mb,
    (routeofadministration001mb) => routeofadministration001mb.assay001wbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "route_slno", referencedColumnName: "id" }])
  routeSlno2: Routeofadministration001mb;

  @ManyToOne(
    () => Unitsinglevalue001mb,
    (unitsinglevalue001mb) => unitsinglevalue001mb.assay001wbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "unit_slno", referencedColumnName: "id" }])
  unitSlno2: Unitsinglevalue001mb;

  @ManyToOne(
    () => Unithighendvalue001mb,
    (unithighendvalue001mb) => unithighendvalue001mb.assay001wbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "units_slno", referencedColumnName: "id" }])
  unitsSlno2: Unithighendvalue001mb;

  @ManyToOne(
    () => Unitlowendvalue001mb,
    (unitlowendvalue001mb) => unitlowendvalue001mb.assay001wbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "united_slno", referencedColumnName: "id" }])
  unitedSlno2: Unitlowendvalue001mb;

  @ManyToOne(
    () => Ligandversion001mb,
    (ligandversion001mb) => ligandversion001mb.assay001wbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "ligandVersion_slno", referencedColumnName: "id" }])
  ligandVersionSlno2: Ligandversion001mb;


  setProperties(assayDTO: AssayDTO) {
    this.assayId = assayDTO.assayId;
    this.ordinal = assayDTO.ordinal;
    this.collectionId = assayDTO.collectionId;
    this.ligandVersionSlno = assayDTO.ligandVersionSlno;
    this.toxiCitySlno = assayDTO.toxiCitySlno;
    this.routeSlno = assayDTO.routeSlno;
    this.ligandSvalue = assayDTO.ligandSvalue;
    this.unitSlno = assayDTO.unitSlno;
    this.ligandHvalue = assayDTO.ligandHvalue;
    this.ligandLvalue = assayDTO.ligandLvalue;
    this.unitsSlno = assayDTO.unitsSlno;
    this.administration = assayDTO.administration;
    this.procedure = assayDTO.procedure;
    this.target = assayDTO.target;
    this.conditionType = assayDTO.conditionType;
    this.conditionMaterial = assayDTO.conditionMaterial;
    this.value = assayDTO.value;
    this.unitedSlno = assayDTO.unitedSlno;
    this.insertUser = assayDTO.insertUser;
    this.insertDatetime = assayDTO.insertDatetime;
    this.updatedUser = assayDTO.updatedUser;
    this.updatedDatetime = assayDTO.updatedDatetime;

  }
}
