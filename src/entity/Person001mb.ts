import { PersonDTO } from "src/dto/Person.dto";
import {
  Column,
  Entity,
  Index,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User001mb } from "./User001mb";

@Index("UNI_firstname", ["firstname"], { unique: true })
@Index("UNI_lastname", ["lastname"], { unique: true })
@Index("UNI_dob", ["dob"], { unique: true })
@Entity("person001mb", { schema: "saturo" })
export class Person001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "person_id" })
  personId: number;

  @Column("varchar", { name: "firstname", unique: true, length: 45 })
  firstname: string;

  @Column("varchar", { name: "lastname", unique: true, length: 45 })
  lastname: string;

  @Column("int", { name: "age", nullable: true })
  age: number | null;

  @Column("datetime", { name: "dob", nullable: true, unique: true })
  dob: Date | null;

  @Column("varchar", { name: "sex", nullable: true, length: 30 })
  sex: string | null;

  @Column("varchar", { name: "maritalstatus", nullable: true, length: 30 })
  maritalstatus: string | null;

  @Column("varchar", { name: "bloodgroup", nullable: true, length: 30 })
  bloodgroup: string | null;

  @Column("varchar", { name: "address1", nullable: true, length: 50 })
  address1: string | null;

  @Column("varchar", { name: "address2", nullable: true, length: 50 })
  address2: string | null;

  @Column("varchar", { name: "address3", nullable: true, length: 50 })
  address3: string | null;

  @Column("varchar", { name: "religion", nullable: true, length: 30 })
  religion: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 30 })
  city: string | null;

  @Column("varchar", { name: "state", nullable: true, length: 30 })
  state: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 30 })
  country: string | null;

  @Column("int", { name: "zipcode", nullable: true })
  zipcode: number | null;

  @Column("int", { name: "mobileno", nullable: true })
  mobileno: number | null;

  @Column("int", { name: "workphoneno", nullable: true })
  workphoneno: number | null;

  @Column("int", { name: "homephoneno", nullable: true })
  homephoneno: number | null;

  @Column("varchar", { name: "primaryemail", nullable: true, length: 30 })
  primaryemail: string | null;

  @Column("varchar", { name: "secondaryemail", nullable: true, length: 30 })
  secondaryemail: string | null;

  @Column("varchar", { name: "occupationtype", nullable: true, length: 30 })
  occupationtype: string | null;

  @Column("varchar", { name: "occupationrole", nullable: true, length: 30 })
  occupationrole: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @OneToOne(() => User001mb, (user001mb) => user001mb.person)
  user001mb: User001mb;

  setProperties(personDTO: PersonDTO) {
    this.personId = personDTO.personId;
    this.firstname = personDTO.firstname;
    this.lastname = personDTO.lastname;
    this.age = personDTO.age;
    this.dob = personDTO.dob;
    this.sex = personDTO.sex;
    this.maritalstatus = personDTO.maritalstatus;
    this.updatedDatetime = personDTO.updatedDatetime;
    this.bloodgroup = personDTO.bloodgroup;
    this.address1 = personDTO.address1;
    this.address2 = personDTO.address2;
    this.address3 = personDTO.address3;
    this.insertDatetime = personDTO.insertDatetime;
    this.updatedUser = personDTO.updatedUser;
    this.updatedDatetime = personDTO.updatedDatetime;
    this.religion = personDTO.religion;
    this.city = personDTO.city;
    this.state = personDTO.state;
    this.country = personDTO.country;
    this.zipcode = personDTO.zipcode;
    this.mobileno = personDTO.mobileno;
    this.workphoneno = personDTO.workphoneno;
    this.homephoneno = personDTO.homephoneno;
    this.primaryemail = personDTO.primaryemail;
    this.secondaryemail = personDTO.secondaryemail;
    this.occupationtype = personDTO.occupationtype;
    this.insertUser = personDTO.insertUser;
    this.insertDatetime = personDTO.insertDatetime;
    this.updatedUser = personDTO.updatedUser;
    this.updatedDatetime = personDTO.updatedDatetime;
}
}
