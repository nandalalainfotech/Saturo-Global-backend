import { Gender001mb } from "src/entity/Gender001mb";

export class GenderDTO {
    id: number;
    gender: string;
    insertUser: string;
    insertDatetime: Date;
    updatedUser: string | null;
    updatedDatetime: Date | null;

    setProperties(gender001mb: Gender001mb) {
        this.id = gender001mb.id;
        this.gender = gender001mb.gender;
        this.insertUser = gender001mb.insertUser;
        this.insertDatetime = gender001mb.insertDatetime;
        this.updatedUser = gender001mb.updatedUser;
        this.updatedDatetime = gender001mb.updatedDatetime;
    }
}