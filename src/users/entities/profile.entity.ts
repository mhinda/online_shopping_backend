import { Attachment } from "src/common/entities/attachment.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { User } from "./user.entity";
import { Social } from "src/common/entities/social.entity";

@Entity()
export class Profile extends Attachment {
    // avatar?: Attachment;
    @Column()
    bio?: string;

    @OneToMany(() => Social, socials => socials.profile)
    socials?: Social[];

    @Column()
    contact?: string;

    @OneToOne(() => User, user => user.profile)
    @JoinColumn({ name: 'user_id' })
    user?: User;
}
