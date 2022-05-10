import { Type001mb } from "src/entity/Type001mb";

export class TypeDTO {
    id: number;
    type: string;

    setProperties(type001mb: Type001mb) {
        this.id = type001mb.id;
        this.type = type001mb.type;
    }
}