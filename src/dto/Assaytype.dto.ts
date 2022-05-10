import { Assaytype001mb } from "src/entity/Assaytype001mb";

export class AssayTypeDTO {
    id: number;
    assayType: string;

    setProperties(assaytype001mb: Assaytype001mb) {
        this.id = assaytype001mb.id;
        this.assayType = assaytype001mb.assayType;
    }
}