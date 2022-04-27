import { OrderDTO } from "src/dto/Order.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Ordername", ["ordername"], { unique: true })
@Index("IDX_3568b8d6f99a332cda5e2e2fdb", ["ordername"], { unique: true })
@Entity("order001mb", { schema: "saturo" })
export class Order001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Orderid" })
  orderid: number;

  @Column("varchar", {
    name: "Ordername",
    nullable: true,
    unique: true,
    length: 50,
  })
  ordername: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(orderDTO: OrderDTO) {
    this.orderid = orderDTO.orderid;
    this.ordername = orderDTO.ordername;
    this.insertUser = orderDTO.insertUser;
    this.insertDatetime = orderDTO.insertDatetime;
    this.updatedUser = orderDTO.updatedUser;
    this.updatedDatetime = orderDTO.updatedDatetime;
}
}
