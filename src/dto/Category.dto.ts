import { Category001mb } from "src/entity/Category001mb";

export class CategoryDTO {
    id: number;
    category: string;

    setProperties(category001mb: Category001mb) {
        this.id = category001mb.id;
        this.category = category001mb.category;
    }
}