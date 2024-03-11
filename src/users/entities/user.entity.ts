import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { CoreEntity } from 'src/common/entities/core.entity';
import { Profile } from "./profile.entity";
import { Shop } from "src/shops/entities/shop.entity";

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

    @OneToOne(() => Shop, shopOwner => shopOwner.owner)
    shopOwner: Shop;

    @ManyToOne(() => Shop, shopStaff => shopStaff.staffs)
    shopStaff: Shop

}

