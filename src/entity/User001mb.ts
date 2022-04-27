import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role001mb } from "./Role001mb";
import { Person001mb } from "./Person001mb";
import { UserDTO } from "src/dto/User.dto";

@Entity("user001mb", { schema: "saturo" })
export class User001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "person_id" })
  personId: number;

  @Column("varchar", { name: "domain", length: 40 })
  domain: string;

  @Column("varchar", { name: "username", length: 40 })
  username: string;

  @Column("varchar", { name: "password", length: 100 })
  password: string;

  @Column("char", { name: "status", length: 1 })
  status: string;

  @Column("varchar", { name: "email", length: 30 })
  email: string;

  @Column("varchar", { name: "securityquestion", length: 250 })
  securityquestion: string;

  @Column("varchar", { name: "securityanswer", length: 250 })
  securityanswer: string;

  @Column("varchar", {
    name: "theme",
    nullable: true,
    length: 10,
    default: () => "'#286090'",
  })
  theme: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @OneToMany(() => Role001mb, (role001mb) => role001mb.rl)
  role001mbs: Role001mb[];

  @OneToOne(() => Person001mb, (person001mb) => person001mb.user001mb, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "person_id", referencedColumnName: "personId" }])
  person: Person001mb;

  setProperties(userDTO: UserDTO) {
    this.personId = userDTO.personId;
    this.domain = userDTO.domain;
    this.username = userDTO.username;
    this.password = userDTO.password;
    this.status = userDTO.status;
    this.email = userDTO.email;
    this.securityquestion = userDTO.securityquestion;
    this.securityanswer = userDTO.securityanswer;
    this.theme = userDTO.theme;
    this.insertUser = userDTO.insertUser;
    this.insertDatetime = userDTO.insertDatetime;
    this.updatedUser = userDTO.updatedUser;
    this.updatedDatetime = userDTO.updatedDatetime;
  }
}
