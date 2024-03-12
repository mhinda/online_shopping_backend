import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany } from 'typeorm';

export enum AddressType {
    BILLING = 'billing',
    SHIPPING = 'shipping',
}

@Entity()
export class Address extends CoreEntity {
    @Column()
    default: boolean;

    @Column({
        type: 'enum',
        enum: AddressType
    })
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

    @OneToMany(() => Order, order => order.address)
    order: Order

    // @Column()
    // customer: User;
}
