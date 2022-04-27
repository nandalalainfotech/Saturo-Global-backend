import { IsNotEmpty } from "class-validator";
import { Progprodorder001mb } from "src/entity/Progprodorder001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ProgprodorderDTO extends BaseDTO {

	prodId: number;

	@IsNotEmpty()
	prorderCode: string;

	@IsNotEmpty()
	date: Date;

	@IsNotEmpty()
	itemtoManufacture: string;

	@IsNotEmpty()
	toProduce: string | null;

	@IsNotEmpty()
	produced: string;

	@IsNotEmpty()
	empCompany: string;

	setProperties(progprodorder001mb: Progprodorder001mb) {
		this.prodId = progprodorder001mb.prodId;
		this.prorderCode = progprodorder001mb.prorderCode;
		this.date = progprodorder001mb.date;
		this.itemtoManufacture = progprodorder001mb.itemtoManufacture;
		this.toProduce = progprodorder001mb.toProduce;
		this.produced = progprodorder001mb.produced;
		this.empCompany = progprodorder001mb.empCompany;
		this.insertUser = progprodorder001mb.insertUser;
        this.insertDatetime = progprodorder001mb.insertDatetime;
        this.updatedUser = progprodorder001mb.updatedUser;
        this.updatedDatetime = progprodorder001mb.updatedDatetime;
	}
}
