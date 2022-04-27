import { IsNotEmpty } from "class-validator";
import { Issueditem001mb } from "src/entity/Issueditem001mb.entity";
import { BaseDTO } from "./Base.dto";

export class IssueditemDTO extends BaseDTO {
	issueId: number;

	@IsNotEmpty()
	porderCode: string;

	@IsNotEmpty()
	issueDate: Date;

	@IsNotEmpty()
	itemcode: string;

	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	quantity: number;

	@IsNotEmpty()
	uom: string;

	@IsNotEmpty()
	amount: string;

	@IsNotEmpty()
	serialNo: string;

	@IsNotEmpty()
	sourceWh: string;

	@IsNotEmpty()
	targetWh: string;

	@IsNotEmpty()
	stockEntry: string;

	@IsNotEmpty()
	company: string;
	
	setProperties(issueditem001mb: Issueditem001mb) {
		this.issueId = issueditem001mb.issueId;
		this.porderCode = issueditem001mb.porderCode;
		this.issueDate = issueditem001mb.issueDate;
		this.description = issueditem001mb.description;
		this.description = issueditem001mb.description;
		this.quantity = issueditem001mb.quantity;
		this.uom = issueditem001mb.uom;
		this.serialNo = issueditem001mb.serialNo;
		this.sourceWh = issueditem001mb.sourceWh;
		this.targetWh = issueditem001mb.targetWh;
		this.stockEntry = issueditem001mb.stockEntry;
		this.company = issueditem001mb.company;
		this.itemcode = issueditem001mb.itemcode;
		this.amount = issueditem001mb.amount;
		this.insertUser = issueditem001mb.insertUser;
        this.insertDatetime = issueditem001mb.insertDatetime;
        this.updatedUser = issueditem001mb.updatedUser;
        this.updatedDatetime = issueditem001mb.updatedDatetime;
	}
}
