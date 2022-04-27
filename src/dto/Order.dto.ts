import { IsNotEmpty } from "class-validator";
import { Order001mb } from "src/entity/Order001mb";
import { BaseDTO } from "./Base.dto";

export class OrderDTO extends BaseDTO {
    orderid: number;

    @IsNotEmpty()  
    
    ordername: string | null;

    setProperties(order001mb: Order001mb) {
        this.orderid = order001mb.orderid;
        this.ordername = order001mb.ordername;
        this.insertUser = order001mb.insertUser;
        this.insertDatetime = order001mb.insertDatetime;
        this.updatedUser = order001mb.updatedUser;
        this.updatedDatetime = order001mb.updatedDatetime;
    }

}
