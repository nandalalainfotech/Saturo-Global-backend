import { IsNotEmpty } from "class-validator";
import { Itemdt001mb } from "src/entity/Itemdt001mb";
import { BaseDTO } from "./Base.dto";

export class ItemdtDTO extends BaseDTO {
	itemid: number;

	@IsNotEmpty()
	itemcode: string | null;

	@IsNotEmpty()
	quantity: number;

	@IsNotEmpty()
	rate: string | null;

	@IsNotEmpty()
	amount: string | null;
	
	setProperties(itemdt001mb: Itemdt001mb) {
		this.itemid = itemdt001mb.itemid;
		this.itemcode = itemdt001mb.itemcode;
		this.quantity = itemdt001mb.quantity;
		this.rate = itemdt001mb.rate;
		this.amount = itemdt001mb.amount;
		this.insertUser = itemdt001mb.insertUser;
        this.insertDatetime = itemdt001mb.insertDatetime;
        this.updatedUser = itemdt001mb.updatedUser;
        this.updatedDatetime = itemdt001mb.updatedDatetime;
	}
}
