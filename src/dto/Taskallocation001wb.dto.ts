import { Taskallocation001wb } from "src/entity/Taskallocation001wb";

export class TaskallocationDTO {
    curatorId: number;
    curatorSlno: number;
    curatorName: string;
    curatorTanNo: string;
    curatorAllocateDate: Date;
    curatorCompleteDate: Date;
    curatorStatus: string;
    reviewerSlno: number;
    reviewerName: string;
    reviewerTanNo: string;
    reviewerAllocateDate: Date;
    reviewerCompleteDate: Date;
    reviewerStatus: string;
    insertUser: string;
    insertDatetime: Date;
    updatedUser: string | null;
    updatedDatetime: Date | null;

    setProperties(taskallocation001wb: Taskallocation001wb) {
        this.curatorId = taskallocation001wb.curatorId;
        this.curatorSlno = taskallocation001wb.curatorSlno;
        this.curatorName = taskallocation001wb.curatorName;
        this.curatorTanNo = taskallocation001wb.curatorTanNo;
        this.curatorAllocateDate = taskallocation001wb.curatorAllocateDate;
        this.curatorCompleteDate = taskallocation001wb.curatorCompleteDate;
        this.reviewerSlno = taskallocation001wb.reviewerSlno;
        this.reviewerName = taskallocation001wb.reviewerName;
        this.reviewerTanNo = taskallocation001wb.reviewerTanNo;
        this.reviewerAllocateDate = taskallocation001wb.reviewerAllocateDate;
        this.reviewerCompleteDate = taskallocation001wb.reviewerCompleteDate;
        this.insertUser = taskallocation001wb.insertUser;
        this.insertDatetime = taskallocation001wb.insertDatetime;
        this.updatedUser = taskallocation001wb.updatedUser;
        this.updatedDatetime = taskallocation001wb.updatedDatetime;
    }
}