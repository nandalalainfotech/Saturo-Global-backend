import { Unithighendvalue001mb } from "src/entity/Unithighendvalue001mb";

export class UnitHighEndValueDTO {
    id: number;
    units: string;

    setProperties(unithighendvalue001mb: Unithighendvalue001mb) {
        this.id = unithighendvalue001mb.id;
        this.units = unithighendvalue001mb.units;
    }
}