import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDTO } from "src/dto/User.dto";
import { Person001mb } from "src/entity/Person001mb";
import { User001mb } from "src/entity/User001mb";
import { MailService } from "src/mail/mail.service";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
	saltRounds = 10;

	constructor(private mailService: MailService,
		@InjectRepository(User001mb) private readonly userRepository: Repository<User001mb>,
		@InjectRepository(Person001mb) private readonly personRepository: Repository<Person001mb>) { }

	async create(userDTO: UserDTO): Promise<User001mb> {
		console.log("userDTO",userDTO)
		const user001mb = new User001mb();
		user001mb.setProperties(userDTO);
		user001mb.password = "erpnext001";
		const hash = await bcrypt.hash(user001mb.password, this.saltRounds);
		user001mb.password = hash;

		let person001mb = new Person001mb();
		person001mb.firstname = userDTO.firstname;
		person001mb.lastname = userDTO.lastname;
		person001mb.insertDatetime = userDTO.insertDatetime;
		person001mb.insertUser = userDTO.insertUser;
		person001mb.personId = userDTO.personId;
		await this.personRepository.save(person001mb);
		// console.log("person001mb", person001mb);
		// console.log("user001mb", user001mb);
		await this.userRepository.save(user001mb);
		await this.mailService.sendUserConfirmation(user001mb);
		return user001mb;
	}

	async update(userDTO: UserDTO): Promise<User001mb> {
		const user001mb = await this.userRepository.findOne({ where: { personId: userDTO.personId } });
		user001mb.domain = userDTO.domain;
		user001mb.username = userDTO.username;
		user001mb.status = userDTO.status;
		user001mb.email = userDTO.email;
		user001mb.securityquestion = userDTO.securityquestion;
		user001mb.securityanswer = userDTO.securityanswer;
		user001mb.updatedUser = userDTO.updatedUser;
		user001mb.updatedDatetime = userDTO.updatedDatetime;
		user001mb.updatedUser = userDTO.updatedUser;
		user001mb.updatedDatetime = userDTO.updatedDatetime;

		const person001mb = await this.personRepository.findOne({ where: { personId: userDTO.personId } });
		person001mb.firstname = userDTO.firstname;
		person001mb.lastname = userDTO.lastname;
		person001mb.updatedUser = userDTO.updatedUser;
		person001mb.updatedDatetime = userDTO.updatedDatetime;
		await this.personRepository.save(person001mb);
		return this.userRepository.save(user001mb);
	}

	async updatePassword(userDTO: UserDTO): Promise<User001mb> {
		const hash = await bcrypt.hash(userDTO.password, this.saltRounds);
		userDTO.password = hash;
		const user001mb = await this.userRepository.findOne({ where: { personId: userDTO.personId } });
		user001mb.password = userDTO.password;
		user001mb.status = "A";
		return this.userRepository.save(user001mb);
	}

	async updateUserName(user: any): Promise<User001mb> {
		const user001mb = await this.userRepository.findOne({ where: { personId: user.personId } });
		user001mb.username = user.newUsername;
		return this.userRepository.save(user001mb);
	}

	async update1(updateTheme: any): Promise<User001mb> {
		const user001mb = await this.userRepository.findOne({ where: { personId: updateTheme.personId } });
		user001mb.theme = updateTheme.theme;
		return this.userRepository.save(user001mb);
	}

	async findAll(): Promise<User001mb[]> {
		return this.userRepository.find({ relations: ["person"] });
	}

	findOne(id: number): Promise<User001mb> {
		return this.userRepository.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.userRepository.delete(id);
		await this.personRepository.delete(id);
	}
}