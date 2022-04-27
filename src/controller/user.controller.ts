import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { UserDTO } from "src/dto/User.dto";
import { User001mb } from "src/entity/User001mb";
import { UserService } from "src/service/user.service";


@Controller('/testandreportstudio/api/user')
export class UserController {
	constructor(private readonly userService: UserService) { }

	// --------------------------user registration-------------


    @Post("regSave")
    create1(@Body() userDTO: UserDTO): Promise<User001mb> {
		console.log("user save---->");
        return this.userService.create(userDTO);
    }
    // @Get('registerfindAll')
    // registerfindAll(): Promise<User001mb[]> {
    //     return this.userService.findAll();
    // }

    // --------------------------user registration end-------------
	
	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() userDTO: UserDTO): Promise<User001mb> {
		return this.userService.create(userDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() userDTO: UserDTO): Promise<User001mb> {
		return this.userService.update(userDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Post("updateUserTheme")
	updateUserTheme(@Body() updateTheme: any): Promise<User001mb> {
		return this.userService.update1(updateTheme);
	}

	@UseGuards(JwtAuthGuard)
	@Post('updateUserName')
	updateUserName(@Body() userName: any): Promise<User001mb> {
		return this.userService.updateUserName(userName);
	}

	@UseGuards(JwtAuthGuard)
	@Post('updatePassword')
	updatePassword(@Body() userDTO: UserDTO): Promise<User001mb> {
		return this.userService.updatePassword(userDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<User001mb[]> {
		return this.userService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<User001mb> {
		return this.userService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.userService.remove(id);
	}
}

