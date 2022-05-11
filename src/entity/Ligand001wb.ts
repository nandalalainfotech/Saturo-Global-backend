import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ligandversion001mb } from "./Ligandversion001mb";
import { Ligandtype001mb } from "./Ligandtype001mb";
import { LigandDTO } from "src/dto/Ligand.dto";
import { Assay001wb } from "./Assay001wb";

@Index("ligandVersion_slno", ["ligandVersionSlno"], {})
@Index("ligandType_slno", ["ligandTypeSlno"], {})
@Entity("ligand001wb", { schema: "saturo" })
export class Ligand001wb {
  @PrimaryGeneratedColumn({ type: "int", name: "ligandId" })
  ligandId: number;

  @Column("varchar", { name: "tanNumber", length: 30 })
  tanNumber: string;

  @Column("varchar", { name: "ligandUri", length: 150 })
  ligandUri: string;

  @Column("int", { name: "ligandVersion_slno" })
  ligandVersionSlno: number;

  @Column("varchar", { name: "ligandStatus", length: 50 })
  ligandStatus: string;

  @Column("varchar", { name: "collection", length: 30 })
  collection: string;

  @Column("int", { name: "ligandType_slno" })
  ligandTypeSlno: number;

  @Column("varchar", { name: "ligandDetail", length: 100 })
  ligandDetail: string;

  @Column("varchar", { name: "collectionName", length: 100 })
  collectionName: string;

  @Column("varchar", { name: "collectionId", length: 30 })
  collectionId: string;

  @Column("varchar", { name: "locator", length: 30 })
  locator: string;

  @Column("varchar", { name: "sourceType", length: 30 })
  sourceType: string;

  @Column("varchar", { name: "citation", length: 30 })
  citation: string;

  @Column("varchar", { name: "diseaseName", length: 30 })
  diseaseName: string;

  @Column("varchar", { name: "target", length: 150 })
  target: string;

  @Column("varchar", { name: "targetVersion", length: 20 })
  targetVersion: string;

  @Column("varchar", { name: "targetStatus", length: 50 })
  targetStatus: string;

  @Column("varchar", { name: "collectionId1", length: 30 })
  collectionId1: string;

  @Column("varchar", { name: "original", length: 50 })
  original: string;

  @Column("varchar", { name: "acronym", length: 30 })
  acronym: string;

  @Column("varchar", { name: "organism", length: 30 })
  organism: string;

  @Column("varchar", { name: "variant", length: 30 })
  variant: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToOne(
    () => Ligandversion001mb,
    (ligandversion001mb) => ligandversion001mb.ligand001wbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "ligandVersion_slno", referencedColumnName: "id" }])
  ligandVersionSlno2: Ligandversion001mb;

  @OneToMany(() => Assay001wb, (assay001wb) => assay001wb.ligandVersionSlno2)
  assay001wbs: Assay001wb[];

  @ManyToOne(
    () => Ligandtype001mb,
    (ligandtype001mb) => ligandtype001mb.ligand001wbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "ligandType_slno", referencedColumnName: "id" }])
  ligandTypeSlno2: Ligandtype001mb;


  setProperties(ligandDTO: LigandDTO) {
    this.ligandId = ligandDTO.ligandId;
    this.tanNumber = ligandDTO.tanNumber;
    this.ligandUri = ligandDTO.ligandUri;
    this.ligandVersionSlno = ligandDTO.ligandVersionSlno;
    this.ligandStatus = ligandDTO.ligandStatus;
    this.collection = ligandDTO.collection;
    this.ligandTypeSlno = ligandDTO.ligandTypeSlno;
    this.ligandDetail = ligandDTO.ligandDetail;
    this.collectionName = ligandDTO.collectionName;
    this.collectionId = ligandDTO.collectionId;
    this.locator = ligandDTO.locator;
    this.sourceType = ligandDTO.sourceType;
    this.citation = ligandDTO.citation;
    this.diseaseName = ligandDTO.diseaseName;
    this.target = ligandDTO.target;
    this.targetVersion = ligandDTO.targetVersion;
    this.targetStatus = ligandDTO.targetStatus;
    this.collectionId1 = ligandDTO.collectionId1;
    this.original = ligandDTO.original;
    this.acronym = ligandDTO.acronym;
    this.organism = ligandDTO.organism;
    this.variant = ligandDTO.variant;
    this.insertUser = ligandDTO.insertUser;
    this.insertDatetime = ligandDTO.insertDatetime;
    this.updatedUser = ligandDTO.updatedUser;
    this.updatedDatetime = ligandDTO.updatedDatetime;
}
}