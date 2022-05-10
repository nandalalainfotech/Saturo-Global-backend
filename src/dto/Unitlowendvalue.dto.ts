import { Unitlowendvalue001mb } from "src/entity/Unitlowendvalue001mb";

export class UnitlowendvalueDTO {
    id: number;
    united: string;

    setProperties(unitlowendvalue001mb: Unitlowendvalue001mb) {
        this.id = unitlowendvalue001mb.id;
        this.united = unitlowendvalue001mb.united;
    }
}