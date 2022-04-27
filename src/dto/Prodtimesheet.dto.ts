import { IsAlpha, IsNotEmpty, IsNumberString, MaxLength } from "class-validator";
import { Prodtimesheet001mb } from "src/entity/Prodtimesheet001mb";
import { BaseDTO } from "./Base.dto";

export class ProdtimesheetDTO extends BaseDTO {
    prtId: number;

    @IsNotEmpty()
    empName: string;

    @IsNotEmpty()
    tsName: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    empCompany: string;

    @IsNotEmpty()
    @IsNumberString()
    twhrs: string;

    setProperties(prodtimesheet001mb: Prodtimesheet001mb) {
        this.prtId = prodtimesheet001mb.prtId;
        this.empName = prodtimesheet001mb.empName;
        this.tsName = prodtimesheet001mb.tsName;
        this.status = prodtimesheet001mb.status;
        this.empCompany = prodtimesheet001mb.empCompany;
        this.twhrs = prodtimesheet001mb.twhrs;
        this.insertUser = prodtimesheet001mb.insertUser;
        this.insertDatetime = prodtimesheet001mb.insertDatetime;
        this.updatedUser = prodtimesheet001mb.updatedUser;
        this.updatedDatetime = prodtimesheet001mb.updatedDatetime;
    }
}
