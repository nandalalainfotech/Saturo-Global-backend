import { IsNotEmpty } from "class-validator";
import { Bom001mb } from "src/entity/Bom001mb";

import { BaseDTO } from "./Base.dto";

export class BomDTO extends BaseDTO {
	id: number;

	@IsNotEmpty()
	bom: string;

	@IsNotEmpty()
	type: string;
	
	setProperties(bom001mb: Bom001mb) {
		this.id = bom001mb.id;
		this.bom = bom001mb.bom;
		this.type = bom001mb.type;
		this.insertUser = bom001mb.insertUser;
        this.insertDatetime = bom001mb.insertDatetime;
        this.updatedUser = bom001mb.updatedUser;
        this.updatedDatetime = bom001mb.updatedDatetime;
	}
}
