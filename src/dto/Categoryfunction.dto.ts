import { Categoryfunction001mb } from "src/entity/Categoryfunction001mb";

export class CategoryFunctionDTO {
    id: number;
    function: string;

    setProperties(categoryfunction001mb: Categoryfunction001mb) {
        this.id = categoryfunction001mb.id;
        this.function = categoryfunction001mb.function;
    }
}