import { Assay001wb } from "src/entity/Assay001wb";
import { Ligand001wb } from "src/entity/Ligand001wb";

export class AssayDTO {
    assayId: number;
    ordinal: string;
    collectionId: string;
    ligandSlno: number;
    assayTypeSlno: number;
    toxiCitySlno: number;
    routeSlno: number;
    ligandSvalue: string;
    unitSlno: number;
    ligandHvalue: string;
    ligandLvalue: string;
    administration: string;
    procedure: string;
    target: string;
    conditionType: string;
    conditionMaterial: string;
    conditionMaterialid: string;
    singleCondition: string;
    singleUnit: string;
    highCondition: string;
    lowCondition: string;
    highLowUnit: string;
    unitedSlno: number;
    insertUser: string;
    insertDatetime: Date;
    updatedUser: string | null;
    updatedDatetime: Date | null;

    ligandSlno2: Ligand001wb;

    
    setProperties(assay001wb: Assay001wb) {
        this.assayId = assay001wb.assayId;
        this.ordinal = assay001wb.ordinal;
        this.collectionId = assay001wb.collectionId;
        this.ligandSlno = assay001wb.ligandSlno;
        this.assayTypeSlno = assay001wb.assayTypeSlno;
        this.toxiCitySlno = assay001wb.toxiCitySlno;
        this.routeSlno = assay001wb.routeSlno;
        this.ligandSvalue = assay001wb.ligandSvalue;
        this.unitSlno = assay001wb.unitSlno;
        this.ligandHvalue = assay001wb.ligandHvalue;
        this.ligandLvalue = assay001wb.ligandLvalue;
        this.administration = assay001wb.administration;
        this.procedure = assay001wb.procedure;
        this.target = assay001wb.target;
        this.conditionType = assay001wb.conditionType;
        this.conditionMaterial = assay001wb.conditionMaterial;
        this.conditionMaterialid = assay001wb.conditionMaterialid;
        this.singleCondition = assay001wb.singleCondition;
        this.singleUnit = assay001wb.singleUnit;
        this.highCondition = assay001wb.highCondition;
        this.lowCondition = assay001wb.lowCondition;
        this.highLowUnit = assay001wb.highLowUnit;
        this.unitedSlno = assay001wb.unitedSlno;
        this.insertUser = assay001wb.insertUser;
        this.insertDatetime = assay001wb.insertDatetime;
        this.updatedUser = assay001wb.updatedUser;
        this.updatedDatetime = assay001wb.updatedDatetime;

    }
}