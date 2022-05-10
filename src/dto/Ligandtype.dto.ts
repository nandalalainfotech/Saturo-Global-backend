import { Ligandtype001mb } from "src/entity/Ligandtype001mb";

export class LigandTypeDTO {
    id: number;
    ligandtype: string;

    setProperties(ligandtype001mb: Ligandtype001mb) {
        this.id = ligandtype001mb.id;
        this.ligandtype = ligandtype001mb.ligandtype;
    }
}