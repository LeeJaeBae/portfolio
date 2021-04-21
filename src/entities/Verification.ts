import { verificationTarget } from 'src/types/types';
import {
	BaseEntity,
	BeforeInsert,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
class Verification extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ type: 'text', enum: ['EMAIL'] })
	target: verificationTarget;
	@Column({ type: 'text' })
	payload: string;
	@Column({ type: 'text' })
	key: string;
	@Column({ type: 'boolean' })
	used: string;

	@CreateDateColumn()
	createAt: string;
	@UpdateDateColumn()
	updateAt: string;

	@BeforeInsert()
	createKey(): void {
		if (this.target === 'EMAIL') {
			this.key = Math.floor(Math.random() * 10000).toString();
		}
	}
}

export default Verification;
