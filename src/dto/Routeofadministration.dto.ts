import { Routeofadministration001mb } from "src/entity/Routeofadministration001mb";

export class RouteOfAdministartionDTO {
    id: number;
    route: string;

    setProperties(routeofadministration001mb: Routeofadministration001mb) {
        this.id = routeofadministration001mb.id;
        this.route = routeofadministration001mb.route;
    }
}