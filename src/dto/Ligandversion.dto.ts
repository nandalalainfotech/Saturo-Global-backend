import { Ligandversion001mb } from "src/entity/Ligandversion001mb";

export class LigandVersionDTO {
    id: number;
    ligandVersion: string;

    setProperties(ligandversion001mb: Ligandversion001mb) {
        this.id = ligandversion001mb.id;
        this.ligandVersion = ligandversion001mb.ligandVersion;
    }
}