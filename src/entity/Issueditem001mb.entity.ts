import { IssueditemDTO } from "src/dto/Issueditem.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("issueditem001mb")
export class Issueditem001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "issueId" })
    issueId: number;

    @Column("varchar", { name: "porderCode", length: 50 })
    porderCode: string;

    @Column("datetime", { name: "issueDate" })
    issueDate: Date;

    @Column("varchar", { name: "Itemcode", length: 50 })
    itemcode: string;

    @Column("varchar", { name: "description", length: 100 })
    description: string;

    @Column("int", { name: "quantity" })
    quantity: number;

    @Column("varchar", { name: "uom", length: 30 })
    uom: string;

    @Column("decimal", { name: "amount", precision: 12, scale: 4 })
    amount: string;

    @Column("varchar", { name: "serialNo", length: 50 })
    serialNo: string;

    @Column("varchar", { name: "sourceWH", length: 50 })
    sourceWh: string;

    @Column("varchar", { name: "targetWH", length: 50 })
    targetWh: string;

    @Column("varchar", { name: "stockEntry", length: 40 })
    stockEntry: string;

    @Column("varchar", { name: "company", length: 50 })
    company: string;
    setProperties(issueditemDTO: IssueditemDTO) {
        this.issueId = issueditemDTO.issueId;
        this.porderCode = issueditemDTO.porderCode;
        this.issueDate = issueditemDTO.issueDate;
        this.description = issueditemDTO.description;
        this.description = issueditemDTO.description;
        this.quantity = issueditemDTO.quantity;
        this.uom = issueditemDTO.uom;
        this.serialNo = issueditemDTO.serialNo;
        this.sourceWh = issueditemDTO.sourceWh;
        this.targetWh = issueditemDTO.targetWh;
        this.stockEntry = issueditemDTO.stockEntry;
        this.company = issueditemDTO.company;
        this.itemcode = issueditemDTO.itemcode;
        this.amount = issueditemDTO.amount;
        this.insertUser = issueditemDTO.insertUser;
        this.insertDatetime = issueditemDTO.insertDatetime;
        this.updatedUser = issueditemDTO.updatedUser;
        this.updatedDatetime = issueditemDTO.updatedDatetime;
    }
}
