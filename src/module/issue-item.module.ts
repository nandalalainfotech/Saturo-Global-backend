import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssueItemController } from 'src/controller/issue-item.controller';
import { Issueditem001mb } from 'src/entity/Issueditem001mb.entity';
import { IssueItemService } from 'src/service/issue-item.service';



@Module({
    imports: [TypeOrmModule.forFeature([Issueditem001mb])],
    providers: [IssueItemService],
    controllers: [IssueItemController],
})
export class IssueItemModule { }