import { IsNotEmpty } from "class-validator";
import { Openprodorder001mb } from "src/entity/Openprodorder001mb";
import { BaseDTO } from "./Base.dto";

export class OpenprodorderDTO extends BaseDTO {

    prodId: number;

    @IsNotEmpty()
    prorderCode: string;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    itemtoManufacture: string;

    @IsNotEmpty()
    toProduce: string | null;

    @IsNotEmpty()
    produced: string;

    @IsNotEmpty()
    empCompany: string;
    
    setProperties(openprodorder001mb: Openprodorder001mb) {
        this.prodId = openprodorder001mb.prodId;
        this.prorderCode = openprodorder001mb.prorderCode;
        this.date = openprodorder001mb.date;
        this.itemtoManufacture = openprodorder001mb.itemtoManufacture;
        this.toProduce = openprodorder001mb.toProduce;
        this.produced = openprodorder001mb.produced;
        this.empCompany = openprodorder001mb.empCompany;
        this.insertUser = openprodorder001mb.insertUser;
        this.insertDatetime = openprodorder001mb.insertDatetime;
        this.updatedUser = openprodorder001mb.updatedUser;
        this.updatedDatetime = openprodorder001mb.updatedDatetime;
    }
}
