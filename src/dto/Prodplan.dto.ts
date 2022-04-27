import { IsNotEmpty, MaxLength } from "class-validator";
import { Prodplan001mb } from "src/entity/Prodplan001mb";
import { BaseDTO } from "./Base.dto";

export class ProdplanDTO extends BaseDTO {
    prplanId: number;

    @IsNotEmpty()
    getItems: string;

    @IsNotEmpty()
    itemCode: string;

    @IsNotEmpty()
    bomNo: string;

    @IsNotEmpty()
    plannedQty: string;

    @IsNotEmpty()
    pendingQty: string;

    @IsNotEmpty()
    description: string;

    setProperties(prodplan001mb: Prodplan001mb) {
        this.prplanId = prodplan001mb.prplanId;
        this.getItems = prodplan001mb.getItems;
        this.itemCode = prodplan001mb.itemCode;
        this.bomNo = prodplan001mb.bomNo;
        this.plannedQty = prodplan001mb.plannedQty;
        this.pendingQty = prodplan001mb.pendingQty;
        this.description = prodplan001mb.description;
        this.insertUser = prodplan001mb.insertUser;
        this.insertDatetime = prodplan001mb.insertDatetime;
        this.updatedUser = prodplan001mb.updatedUser;
        this.updatedDatetime = prodplan001mb.updatedDatetime;
    }
}
