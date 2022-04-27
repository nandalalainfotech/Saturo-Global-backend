import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "src/controller/user.controller";
import { Person001mb } from "src/entity/Person001mb";
import { User001mb } from "src/entity/User001mb";
import { UserService } from "src/service/user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User001mb,Person001mb])],
    providers: [UserService],
    controllers: [UserController],
  })
  export class UserModule { }