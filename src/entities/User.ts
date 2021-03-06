import { IsEmail } from 'class-validator';
import {
	BaseEntity,
	BeforeInsert,
	BeforeUpdate,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import bcrypt from 'bcrypt';
import Page from './Page';
import Comment from './Comment';

const BCRYPT_ROUNDS = 10;
@Entity()
class User extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ type: 'text', nullable: true })
	@IsEmail()
	email: string | null;

	@Column({ type: 'boolean', default: false })
	verifiedEmail: boolean;

	@Column({ type: 'text' })
	firstName: string;

	@Column({ type: 'text' })
	lastName: string;

	@Column({ type: 'int' })
	age: number;

	@Column({ type: 'text' })
	password: string;

	@Column({ type: 'text' })
	profilePhoto: string;

	@CreateDateColumn()
	createAt: string;

	@UpdateDateColumn()
	updateAt: string;

	@Column({ type: 'text', nullable: true })
	nickName: string;

	@ManyToOne((type) => Page, (page) => page.user)
	page: Page[];

	@ManyToOne((type) => Comment, (comment) => comment.user)
	comment: Comment[];

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	hashPassword(password: string): Promise<string> {
		return bcrypt.hash(password, BCRYPT_ROUNDS);
	}

	@BeforeInsert()
	@BeforeUpdate()
	async savePassword(): Promise<void> {
		if (this.password) {
			const hashedPassword = await this.hashPassword(this.password);
			this.password = hashedPassword;
		}
	}

	public comparePassword(password: string): Promise<boolean> {
		return bcrypt.compare(password, this.password);
	}
}

export default User;
