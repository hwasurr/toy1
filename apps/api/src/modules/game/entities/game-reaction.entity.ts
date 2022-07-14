import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/user.entity';
import { Game } from './game.entity';

@Entity()
export class GameReaction {
  @PrimaryGeneratedColumn() id: number;
  @Column({ comment: '리액션 이모지', length: 1, type: 'char' }) reactionEmoji: string;

  // 게임 - 다대다 - 유저 -> 리액션 관계정의
  @ManyToOne(() => User, (user) => user.reactions, { cascade: true })
  user: User;

  @ManyToOne(() => Game, (game) => game.reactions, { cascade: true })
  game: Game;
}
