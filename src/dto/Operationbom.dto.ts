import { IsNotEmpty } from "class-validator";
import { Operationbom001mb } from "src/entity/Operationbom001mb";

import { BaseDTO } from "./Base.dto";

export class OperationbomDTO extends BaseDTO {
    opId: number;

    @IsNotEmpty()
    opName: string;

    @IsNotEmpty()
    workstName: string;

    setProperties(operationbom001mb: Operationbom001mb) {
        this.opId = operationbom001mb.opId;
        this.opName = operationbom001mb.opName;
        this.workstName = operationbom001mb.workstName;
        this.insertUser = operationbom001mb.insertUser;
        this.insertDatetime = operationbom001mb.insertDatetime;
        this.updatedUser = operationbom001mb.updatedUser;
        this.updatedDatetime = operationbom001mb.updatedDatetime;
    }

}
