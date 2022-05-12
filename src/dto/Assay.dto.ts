import { Assay001wb } from "src/entity/Assay001wb";

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
    unitsSlno: number;
    administration: string;
    procedure: string;
    target: string;
    conditionType: string;
    conditionMaterial: string;
    conditionMaterialid: string;
    value: string;
    unitedSlno: number;
    insertUser: string;
    insertDatetime: Date;
    updatedUser: string | null;
    updatedDatetime: Date | null;

    
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
        this.unitsSlno = assay001wb.unitsSlno;
        this.administration = assay001wb.administration;
        this.procedure = assay001wb.procedure;
        this.target = assay001wb.target;
        this.conditionType = assay001wb.conditionType;
        this.conditionMaterial = assay001wb.conditionMaterial;
        this.conditionMaterialid = assay001wb.conditionMaterialid;
        this.value = assay001wb.value;
        this.unitedSlno = assay001wb.unitedSlno;
        this.insertUser = assay001wb.insertUser;
        this.insertDatetime = assay001wb.insertDatetime;
        this.updatedUser = assay001wb.updatedUser;
        this.updatedDatetime = assay001wb.updatedDatetime;

    }
}