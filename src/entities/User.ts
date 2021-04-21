import { IsEmail } from 'class-validator';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
class User extends BaseEntity {
	@PrimaryGeneratedColumn() id!: number;

	@Column({ type: 'text', nullable: true })
	@IsEmail()
	email!: string | null;

	@Column({ type: 'boolean', default: false })
	verifiedEmail!: boolean;

	@Column({ type: 'text' })
	firstName!: string;

	@Column({ type: 'text' })
	lastName!: string;

	@Column({ type: 'int' })
	age!: number;

	@Column({ type: 'text' })
	password!: string;

	@Column({ type: 'text' })
	profilePhoto!: string;

	@CreateDateColumn()
	createAt!: string;

	@UpdateDateColumn()
	updateAt!: string;

	@Column({ type: 'text' })
	nickName!: string;

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

export default User;
