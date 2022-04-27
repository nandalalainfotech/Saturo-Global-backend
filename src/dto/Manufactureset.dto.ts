import { IsAlpha, IsBoolean, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Manufactureset001mb } from "src/entity/Manufactureset001mb";
import { BaseDTO } from "./Base.dto";

export class ManufacturesetDTO extends BaseDTO {

	mansetId: number;


	disableCPandTt: boolean;


	allowOt: boolean;


	allowProdinholy: boolean;

	@IsNotEmpty()
	prodPercent: string;

	@IsNotEmpty()
	backflushRm: string;

	@IsNotEmpty()
	capacityPlan: string;

	@IsNotEmpty()
	timebwOpern: string | null;

	@IsNotEmpty()
	defworkinProgWh: string;

	@IsNotEmpty()
	defFingoodsWh: string;

	setProperties(manufactureset001mb: Manufactureset001mb) {
		this.mansetId = manufactureset001mb.mansetId;
		this.prodPercent = manufactureset001mb.prodPercent;
		this.backflushRm = manufactureset001mb.backflushRm;
		this.capacityPlan = manufactureset001mb.capacityPlan;
		this.timebwOpern = manufactureset001mb.timebwOpern;
		this.defworkinProgWh = manufactureset001mb.defworkinProgWh;
		this.defFingoodsWh = manufactureset001mb.defFingoodsWh;
		this.insertUser = manufactureset001mb.insertUser;
        this.insertDatetime = manufactureset001mb.insertDatetime;
        this.updatedUser = manufactureset001mb.updatedUser;
        this.updatedDatetime = manufactureset001mb.updatedDatetime;
	}
}
