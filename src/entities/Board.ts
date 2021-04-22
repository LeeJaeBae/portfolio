import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import Page from './Page';

@Entity()
class Board extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ type: 'text' })
	name: string;
	@Column({ type: 'int' })
	view: number;
	@Column({ type: 'text' })
	text: string;
	@Column({ type: 'boolean', default: false })
	isFav: boolean;

	@ManyToOne((type) => Page, (page) => page.board)
	pages: Page[];

	@CreateDateColumn()
	createAt: string;

	@UpdateDateColumn()
	updateAt: string;
}

export default Board;
