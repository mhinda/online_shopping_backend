import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity } from 'typeorm';

export enum AddressType {
    BILLING = 'billing',
    SHIPPING = 'shipping',
}

@Entity()
export class Address extends CoreEntity {
    @Column()
    title: string;

    @Column()
    default: boolean;

    @Column()
    type: AddressType;

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

    // @Column()
    // customer: User;
}
