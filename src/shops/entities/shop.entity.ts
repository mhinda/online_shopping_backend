// import { UserAddress } from 'src/addresses/entities/address.entity';
// import { Attachment } from 'src/common/entities/attachment.entity';
import { Attachment } from 'src/common/entities/attachment.entity';
import { Social } from 'src/common/entities/social.entity';
// import { Location, ShopSocials } from 'src/settings/entities/setting.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Shop extends Attachment {
    @OneToOne(() => User, owner => owner.shopOwner)
    @JoinColumn({ name: 'user_id' })
    owner: User;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    description?: string;    

    @Column()
    street_address: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    zip: string;

    @Column()
    email: string;

    @Column()
    phone: string

    @Column()
    mobile: string

    @Column()
    website: string;

    @OneToMany(() => User, staffs => staffs.shopStaff)
    staffs?: User[];

    @Column()
    is_active: boolean;

    @OneToMany(() => Social, socials => socials.shop)
    socials?: Social[];


}

//     orders_count: number;
//     products_count: number;
//     balance?: Balance;

//     cover_image: Attachment;
//     logo?: Attachment;
//     address: UserAddress;
//     distance?: string;
//     lat?: string;
//     lng?: string;
// }

// export class Balance {
//     id: number;
//     admin_commission_rate: number;
//     shop: Shop;
//     total_earnings: number;
//     withdrawn_amount: number;
//     current_balance: number;
//     payment_info: PaymentInfo;
// }

// export class PaymentInfo {
//     account: string;
//     name: string;
//     email: string;
//     bank: string;
// }
@Entity()
export class ShopSettings {
    // socials: ShopSocials[];

    @Column()
    contact: string;
    // location: Location;

    @Column()
    website: string;
}