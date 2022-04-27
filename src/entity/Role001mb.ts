import { RoleDTO } from "src/dto/Role.dto";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User001mb } from "./User001mb";

@Index("rlid", ["rlid"], {})
@Entity("role001mb", { schema: "saturo" })
export class Role001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "rlid" })
  rlid: number;

  @Column("varchar", { name: "rolename", length: 40 })
  rolename: string;

  @Column("char", { name: "status", length: 1 })
  status: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToOne(() => User001mb, (user001mb) => user001mb.role001mbs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "rlid", referencedColumnName: "personId" }])
  rl: User001mb;

  setProperties(roleDTO: RoleDTO) {
    this.id = roleDTO.id;
    this.rlid = roleDTO.rlid;
    this.rolename = roleDTO.rolename;
    this.status = roleDTO.status;
    this.insertUser = roleDTO.insertUser;
    this.insertDatetime = roleDTO.insertDatetime;
    this.updatedUser = roleDTO.updatedUser;
    this.updatedDatetime = roleDTO.updatedDatetime;
  }
}
