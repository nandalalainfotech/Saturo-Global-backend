import { IsNotEmpty } from "class-validator";
import { Bomtype001mb } from "src/entity/Bomtype001mb";
import { BaseDTO } from "./Base.dto";

export class BomtypeDTO extends BaseDTO{

    bomId: number;

    @IsNotEmpty()
    bomName: string;

    @IsNotEmpty()
    bomType: string | null;

    setProperties(bomtype001mb: Bomtype001mb) {
        this.bomId = bomtype001mb.bomId;
        this.bomName = bomtype001mb.bomName;
        this.bomType = bomtype001mb.bomType;
        this.insertUser = bomtype001mb.insertUser;
        this.insertDatetime = bomtype001mb.insertDatetime;
        this.updatedUser = bomtype001mb.updatedUser;
        this.updatedDatetime = bomtype001mb.updatedDatetime;
    }
}
