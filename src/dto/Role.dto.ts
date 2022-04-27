import { Role001mb } from "src/entity/Role001mb";
import { BaseDTO } from "./Base.dto";

export class RoleDTO extends BaseDTO {
	id: number;
	rlid: number;
	rolename: string;
	status: string;
	insertUser: string;
	insertDatetime: Date;
	updatedUser: string | null;
	updatedDatetime: Date | null;

	setProperties(role001mb: Role001mb) {
		this.id = role001mb.id;
		this.rlid = role001mb.rlid;
		this.rolename = role001mb.rolename;
		this.status = role001mb.status;
		this.insertUser = role001mb.insertUser;
		this.insertDatetime = role001mb.insertDatetime;
		this.updatedUser = role001mb.updatedUser;
		this.updatedDatetime = role001mb.updatedDatetime;
	}
}