import { Unitsinglevalue001mb } from "src/entity/Unitsinglevalue001mb";

export class UnitSingleValueDTO {
    id: number;
    unit: string;

    setProperties(unitsinglevalue001mb: Unitsinglevalue001mb) {
        this.id = unitsinglevalue001mb.id;
        this.unit = unitsinglevalue001mb.unit;
    }
}