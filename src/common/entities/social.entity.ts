import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CoreEntity } from "./core.entity";
import { Profile } from "src/users/entities/profile.entity";
import { Shop } from "src/shops/entities/shop.entity";

@Entity()
export class Social extends CoreEntity {
    @Column()
    type: string;

    @Column()
    link: string;

    @ManyToOne(() => Profile, profile => profile.socials)
    @JoinColumn({ name: 'profile_id' })
    profile: Profile

    @ManyToOne(() => Shop, shop => shop.socials)
    @JoinColumn({ name: 'shop_id' })
    shop: Shop
}