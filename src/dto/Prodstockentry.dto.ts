import { IsNotEmpty, MaxLength } from "class-validator";
import { Prodstockentry001mb } from "src/entity/Prodstockentry001mb";
import { BaseDTO } from "./Base.dto";

export class ProdstockentryDTO extends BaseDTO {
    prstockId: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    purpose: string;

    @IsNotEmpty()
    stockEntry: string;

    setProperties(prodstockentry001mb: Prodstockentry001mb) {
        this.prstockId = prodstockentry001mb.prstockId;
        this.title = prodstockentry001mb.title;
        this.status = prodstockentry001mb.status;
        this.purpose = prodstockentry001mb.purpose;
        this.stockEntry = prodstockentry001mb.stockEntry;
        this.insertUser = prodstockentry001mb.insertUser;
        this.insertDatetime = prodstockentry001mb.insertDatetime;
        this.updatedUser = prodstockentry001mb.updatedUser;
        this.updatedDatetime = prodstockentry001mb.updatedDatetime;
    }
}
