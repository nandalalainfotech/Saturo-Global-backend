import { Taskallocation001wb } from "src/entity/Taskallocation001wb";

export class TaskallocationDTO {
    curatorId: number;
    curatorName: string;
    curatorTanNo: string;
    curatorAllocateDate: Date;
    curatorCompleteDate: Date;
    curatorStatus: string;
    reviewerName: string;
    reviewerTanNo: string;
    reviewerAllocateDate: Date;
    reviewerStatus: string;
    insertUser: string;
    insertDatetime: Date;
    updatedUser: string | null;
    updatedDatetime: Date | null;

    setProperties(taskallocation001wb: Taskallocation001wb) {
        this.curatorId = taskallocation001wb.curatorId;
        this.curatorName = taskallocation001wb.curatorName;
        this.curatorTanNo = taskallocation001wb.curatorTanNo;
        this.curatorAllocateDate = taskallocation001wb.curatorAllocateDate;
        this.curatorCompleteDate = taskallocation001wb.curatorCompleteDate;
        this.reviewerName = taskallocation001wb.reviewerName;
        this.curatorStatus = taskallocation001wb.curatorStatus;
        this.reviewerTanNo = taskallocation001wb.reviewerTanNo;
        this.reviewerAllocateDate = taskallocation001wb.reviewerAllocateDate;
        this.reviewerStatus = taskallocation001wb.reviewerStatus;
        this.insertUser = taskallocation001wb.insertUser;
        this.insertDatetime = taskallocation001wb.insertDatetime;
        this.updatedUser = taskallocation001wb.updatedUser;
        this.updatedDatetime = taskallocation001wb.updatedDatetime;
    }
}