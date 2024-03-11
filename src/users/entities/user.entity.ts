import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from 'src/common/entities/core.entity';

@Entity()
export class User extends CoreEntity {
    @Column()
    name: string

    @Column()
    email: string;

    @Column()
    password: string;
}