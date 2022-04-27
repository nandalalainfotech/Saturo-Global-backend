import { IsNotEmpty } from "class-validator";
import { Reqitemorder001mb } from "src/entity/Reqitemorder001mb";
import { BaseDTO } from "./Base.dto";

export class ReqitemorderDTO extends BaseDTO {
	mrsId: number;

	@IsNotEmpty()
	mrSeries: string;

	@IsNotEmpty()
	date: Date;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	quantity: number;

	@IsNotEmpty()
	orderedqty: number | null;

	@IsNotEmpty()
	qtyrtoorder: number | null;

	@IsNotEmpty()
	description: string | null;

	@IsNotEmpty()
	company: string;

	@IsNotEmpty()
	qtytoorder: number | null;

	setProperties(reqitemorder001mb: Reqitemorder001mb) {
		this.mrsId = reqitemorder001mb.mrsId;
		this.mrSeries = reqitemorder001mb.mrSeries;
		this.date = reqitemorder001mb.date;
		this.itemCode = reqitemorder001mb.itemCode;
		this.quantity = reqitemorder001mb.quantity;
		this.orderedqty = reqitemorder001mb.orderedqty;
		this.qtyrtoorder = reqitemorder001mb.qtyrtoorder;
		this.description = reqitemorder001mb.description;
		this.company = reqitemorder001mb.company;
		this.qtytoorder = reqitemorder001mb.qtytoorder;
		this.insertUser = reqitemorder001mb.insertUser;
        this.insertDatetime = reqitemorder001mb.insertDatetime;
        this.updatedUser = reqitemorder001mb.updatedUser;
        this.updatedDatetime = reqitemorder001mb.updatedDatetime;
	}

}
