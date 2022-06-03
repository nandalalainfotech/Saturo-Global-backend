import { TaskallocationDTO } from "src/dto/Taskallocation001wb.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("taskallocation001wb", { schema: "saturo" })
export class Taskallocation001wb {
  @PrimaryGeneratedColumn({ type: "int", name: "curator_id" })
  curatorId: number;

  @Column("varchar", { name: "curator_name", length: 50 })
  curatorName: string;

  @Column("varchar", { name: "curator_tan_no", length: 50 })
  curatorTanNo: string;

  @Column("datetime", { name: "curator_allocate_date" })
  curatorAllocateDate: Date;

  @Column("datetime", { name: "curator_complete_date" })
  curatorCompleteDate: Date;

  @Column("varchar", { name: "curator_status", length: 50 })
  curatorStatus: string;

  @Column("varchar", { name: "reviewer_name", length: 50 })
  reviewerName: string;

  @Column("varchar", { name: "reviewer_tan_no", length: 50 })
  reviewerTanNo: string;

  @Column("datetime", { name: "reviewer_allocate_date" })
  reviewerAllocateDate: Date;

  @Column("varchar", { name: "reviewer_status", length: 50 })
  reviewerStatus: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(taskallocationDTO: TaskallocationDTO) {
    this.curatorId = taskallocationDTO.curatorId;
    this.curatorName = taskallocationDTO.curatorName;
    this.curatorTanNo = taskallocationDTO.curatorTanNo;
    this.curatorAllocateDate = taskallocationDTO.curatorAllocateDate;
    this.curatorCompleteDate = taskallocationDTO.curatorCompleteDate;
    this.reviewerName = taskallocationDTO.reviewerName;
    this.curatorStatus = taskallocationDTO.curatorStatus;
    this.reviewerTanNo = taskallocationDTO.reviewerTanNo;
    this.reviewerAllocateDate = taskallocationDTO.reviewerAllocateDate;
    this.reviewerStatus = taskallocationDTO.reviewerStatus;
    this.insertUser = taskallocationDTO.insertUser;
    this.insertDatetime = taskallocationDTO.insertDatetime;
    this.updatedUser = taskallocationDTO.updatedUser;
    this.updatedDatetime = taskallocationDTO.updatedDatetime;
}
}
