import { IsNotEmpty, MaxLength } from "class-validator";
import { Prodorder001mb } from "src/entity/Prodorder001mb";
import { BaseDTO } from "./Base.dto";

export class ProdorderDTO extends BaseDTO {

    prId: number;

    @IsNotEmpty()
    itemtoManufacture: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    prorderCode: string;

    setProperties(prodorder001mb: Prodorder001mb) {
        this.prId = prodorder001mb.prId;
        this.itemtoManufacture = prodorder001mb.itemtoManufacture;
        this.status = prodorder001mb.status;
        this.prorderCode = prodorder001mb.prorderCode;
        this.insertUser = prodorder001mb.insertUser;
        this.insertDatetime = prodorder001mb.insertDatetime;
        this.updatedUser = prodorder001mb.updatedUser;
        this.updatedDatetime = prodorder001mb.updatedDatetime;
    }
}
