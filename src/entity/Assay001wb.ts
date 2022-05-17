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
import { Unitlowendvalue001mb } from "./Unitlowendvalue001mb";
import { Ligand001wb } from "./Ligand001wb";
import { AssayDTO } from "src/dto/Assay.dto";

@Index("assayType_slno", ["assayTypeSlno"], {})
@Index("toxiCity_slno", ["toxiCitySlno"], {})
@Index("route_slno", ["routeSlno"], {})
@Index("unit_slno", ["unitSlno"], {})
@Index("united_slno", ["unitedSlno"], {})
@Index("ligand_slno", ["ligandSlno"], {})
@Entity("assay001wb", { schema: "saturo" })
export class Assay001wb {
  @PrimaryGeneratedColumn({ type: "int", name: "assayId" })
  assayId: number;

  @Column("varchar", { name: "ordinal", length: 20 })
  ordinal: string;

  @Column("varchar", { name: "collectionId", length: 30 })
  collectionId: string;

  @Column("int", { name: "ligand_slno" })
  ligandSlno: number;

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

  @Column("varchar", { name: "singleCondition", length: 50 })
  singleCondition: string;

  @Column("varchar", { name: "singleUnit", length: 50 })
  singleUnit: string;

  @Column("varchar", { name: "highCondition", length: 50 })
  highCondition: string;

  @Column("varchar", { name: "lowCondition", length: 50 })
  lowCondition: string;

  @Column("varchar", { name: "highLowUnit", length: 50 })
  highLowUnit: string;

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
    () => Unitlowendvalue001mb,
    (unitlowendvalue001mb) => unitlowendvalue001mb.assay001wbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "united_slno", referencedColumnName: "id" }])
  unitedSlno2: Unitlowendvalue001mb;

  @ManyToOne(() => Ligand001wb, (ligand001wb) => ligand001wb.assay001wbs, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ligand_slno", referencedColumnName: "ligandId" }])
  ligandSlno2: Ligand001wb;




  setProperties(assayDTO: AssayDTO) {
    this.assayId = assayDTO.assayId;
    this.ordinal = assayDTO.ordinal;
    this.collectionId = assayDTO.collectionId;
    this.ligandSlno = assayDTO.ligandSlno;
    this.assayTypeSlno = assayDTO.assayTypeSlno;
    this.toxiCitySlno = assayDTO.toxiCitySlno;
    this.routeSlno = assayDTO.routeSlno;
    this.ligandSvalue = assayDTO.ligandSvalue;
    this.unitSlno = assayDTO.unitSlno;
    this.ligandHvalue = assayDTO.ligandHvalue;
    this.ligandLvalue = assayDTO.ligandLvalue;
    this.administration = assayDTO.administration;
    this.procedure = assayDTO.procedure;
    this.target = assayDTO.target;
    this.conditionType = assayDTO.conditionType;
    this.conditionMaterial = assayDTO.conditionMaterial;
    this.conditionMaterialid = assayDTO.conditionMaterialid;
    this.singleCondition = assayDTO.singleCondition;
    this.singleUnit = assayDTO.singleUnit;
    this.highCondition = assayDTO.highCondition;
    this.lowCondition = assayDTO.lowCondition;
    this.highLowUnit = assayDTO.highLowUnit;
    this.value = assayDTO.value;
    this.unitedSlno = assayDTO.unitedSlno;
    this.insertUser = assayDTO.insertUser;
    this.insertDatetime = assayDTO.insertDatetime;
    this.updatedUser = assayDTO.updatedUser;
    this.updatedDatetime = assayDTO.updatedDatetime;

  }

}
