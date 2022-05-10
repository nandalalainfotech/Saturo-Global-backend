import { Gender001mb } from "src/entity/Gender001mb";

export class GenderDTO {
    id: number;
    gender: string;

    setProperties(gender001mb: Gender001mb) {
        this.id = gender001mb.id;
        this.gender = gender001mb.gender;
    }
}