import { Originalprefix001mb } from "src/entity/Originalprefix001mb";

export class OriginalPrefixDTO {
    id: number;
    originalPrefix: string;

    setProperties(originalprefix001mb: Originalprefix001mb) {
        this.id = originalprefix001mb.id;
        this.originalPrefix = originalprefix001mb.originalPrefix;
    }
}