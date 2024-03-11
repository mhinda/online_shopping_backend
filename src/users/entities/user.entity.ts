import { Column, Entity, OneToOne } from "typeorm";
import { CoreEntity } from 'src/common/entities/core.entity';
import { Profile } from "./profile.entity";

@Entity()
export class User extends CoreEntity {
    @Column()
    name: string

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Profile, profile => profile.user)
    profile: Profile
}

