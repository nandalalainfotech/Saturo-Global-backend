import { IsNotEmpty } from "class-validator";
import { Workstation001mb } from "src/entity/Workstation001mb.entity";
import { BaseDTO } from "./Base.dto";

export class WorkstationDTO extends BaseDTO {
    workstId: number;

    @IsNotEmpty()
    workstName: string;

    setProperties(workstation001mb: Workstation001mb) {
        this.workstId = workstation001mb.workstId;
        this.workstName = workstation001mb.workstName;
        this.insertUser = workstation001mb.insertUser;
        this.insertDatetime = workstation001mb.insertDatetime;
        this.updatedUser = workstation001mb.updatedUser;
        this.updatedDatetime = workstation001mb.updatedDatetime;
    }
}
