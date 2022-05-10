import { Toxicity001mb } from "src/entity/Toxicity001mb";

export class ToxicityDTO {
    id: number;
    toxiCity: string;

    setProperties(toxicity001mb: Toxicity001mb) {
        this.id = toxicity001mb.id;
        this.toxiCity = toxicity001mb.toxiCity;
    }
}