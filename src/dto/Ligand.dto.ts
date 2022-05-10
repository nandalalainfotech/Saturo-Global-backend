import { Ligand001wb } from "src/entity/Ligand001wb";

export class LigandDTO {
    ligandId: number;
    tanNumber: string;
    ligandUri: string;
    ligandVersionSlno: number;
    ligandStatus: string;
    collection: string;
    ligandTypeSlno: number;
    ligandDetail: string;
    collectionName: string;
    collectionId: string;
    locator: string;
    sourceType: string;
    citation: string;
    diseaseName: string;
    target: string;
    targetVersion: string;
    targetStatus: string;
    collectionId1: string;
    original: string;
    acronym: string;
    organism: string;
    variant: string;
    insertUser: string;
    insertDatetime: Date;
    updatedUser: string | null;
    updatedDatetime: Date | null;


    setProperties(ligand001wb: Ligand001wb) {
        this.ligandId = ligand001wb.ligandId;
        this.tanNumber = ligand001wb.tanNumber;
        this.ligandUri = ligand001wb.ligandUri;
        this.ligandVersionSlno = ligand001wb.ligandVersionSlno;
        this.ligandStatus = ligand001wb.ligandStatus;
        this.collection = ligand001wb.collection;
        this.ligandTypeSlno = ligand001wb.ligandTypeSlno;
        this.ligandDetail = ligand001wb.ligandDetail;
        this.collectionName = ligand001wb.collectionName;
        this.collectionId = ligand001wb.collectionId;
        this.locator = ligand001wb.locator;
        this.sourceType = ligand001wb.sourceType;
        this.citation = ligand001wb.citation;
        this.diseaseName = ligand001wb.diseaseName;
        this.target = ligand001wb.target;
        this.targetVersion = ligand001wb.targetVersion;
        this.targetStatus = ligand001wb.targetStatus;
        this.collectionId1 = ligand001wb.collectionId1;
        this.original = ligand001wb.original;
        this.acronym = ligand001wb.acronym;
        this.organism = ligand001wb.organism;
        this.variant = ligand001wb.variant;
        this.insertUser = ligand001wb.insertUser;
        this.insertDatetime = ligand001wb.insertDatetime;
        this.updatedUser = ligand001wb.updatedUser;
        this.updatedDatetime = ligand001wb.updatedDatetime;
    }
}