import { IsNotEmpty } from "class-validator";
import { Compprodorder001mb } from "src/entity/Compprodorder001mb";
import { BaseDTO } from "./Base.dto";

export class CompprodorderDTO extends BaseDTO{

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

    setProperties(compprodorder001mb: Compprodorder001mb) {
        this.prodId = compprodorder001mb.prodId;
        this.prorderCode = compprodorder001mb.prorderCode;
        this.date = compprodorder001mb.date;
        this.itemtoManufacture = compprodorder001mb.itemtoManufacture;
        this.toProduce = compprodorder001mb.toProduce;
        this.produced = compprodorder001mb.produced;
        this.empCompany = compprodorder001mb.empCompany;
        this.insertUser = compprodorder001mb.insertUser;
        this.insertDatetime = compprodorder001mb.insertDatetime;
        this.updatedUser = compprodorder001mb.updatedUser;
        this.updatedDatetime = compprodorder001mb.updatedDatetime;
    }
}
