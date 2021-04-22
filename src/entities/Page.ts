import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import Board from './Board';
import Comment from './Comment';
import User from './User';

@Entity()
class Page extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ type: 'text' })
	name: string;
	@Column({ type: 'int' })
	view: number;
	@Column({ type: 'text' })
	text: string;
	@Column({ type: 'boolean', default: false })
	isFav: boolean;

	@ManyToOne((type) => Comment, (comment) => comment.linkPage)
	comment: Comment[];

	@OneToMany((type) => Board, (board) => board.pages)
	board: Board;

	@OneToMany((type) => User, (user) => user.page)
	user: User;

	@CreateDateColumn()
	createAt: string;

	@UpdateDateColumn()
	updateAt: string;
}

export default Page;
