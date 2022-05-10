import { Unithighendvalue001mb } from "src/entity/Unithighendvalue001mb";

export class UnitHighEndValueDTO {
    id: number;
    units: string;
    insertUser: string;
    insertDatetime: Date;
    updatedUser: string | null;
    updatedDatetime: Date | null;

    setProperties(unithighendvalue001mb: Unithighendvalue001mb) {
        this.id = unithighendvalue001mb.id;
        this.units = unithighendvalue001mb.units;
        this.insertUser = unithighendvalue001mb.insertUser;
        this.insertDatetime = unithighendvalue001mb.insertDatetime;
        this.updatedUser = unithighendvalue001mb.updatedUser;
        this.updatedDatetime = unithighendvalue001mb.updatedDatetime;
    }
}