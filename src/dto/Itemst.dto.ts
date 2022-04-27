import { IsNotEmpty } from "class-validator";
import { Itemst001mb } from "src/entity/Itemst001mb";
import { BaseDTO } from "./Base.dto";

export class ItemstDTO extends BaseDTO {

    itemstId: number;

    @IsNotEmpty()
    itemcode: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    itemGroup: string;
    
    setProperties(itemst001mb: Itemst001mb) {
        this.itemstId = itemst001mb.itemstId;
        this.itemcode = itemst001mb.itemcode;
        this.status = itemst001mb.status;
        this.itemGroup = itemst001mb.itemGroup;
        this.insertUser = itemst001mb.insertUser;
        this.insertDatetime = itemst001mb.insertDatetime;
        this.updatedUser = itemst001mb.updatedUser;
        this.updatedDatetime = itemst001mb.updatedDatetime;
    }
}
