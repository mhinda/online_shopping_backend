import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { CoreEntity } from './core.entity';

export class Attachment extends CoreEntity {
  @Column()
  thumbnail?: string;

  @Column()
  original?: string;
}
