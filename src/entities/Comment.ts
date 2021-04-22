import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import Page from './Page';
import User from './User';

@Entity()
class Comment extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ type: 'int' })
	linkId: number;
	@Column({ type: 'text' })
	text: string;

	@OneToMany((type) => Page, (page) => page.comment)
	linkPage: Page;

	@OneToMany((type) => User, (user) => user.comment)
	user: User;

	@Column({ nullable: true })
	userId: number;

	@Column({ type: 'boolean', default: false })
	createBy: boolean;

	@CreateDateColumn()
	createAt: string;

	@UpdateDateColumn()
	updateAt: string;
}

export default Comment;
