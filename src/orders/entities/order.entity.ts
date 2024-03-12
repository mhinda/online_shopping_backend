import { Address } from "src/addresses/entities/address.entity";
import { CoreEntity } from "src/common/entities/core.entity";
import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

export enum OrderStatus {
    PENDING = 'order-pending',
    PROCESSING = 'order-processing',
    COMPLETED = 'order-completed',
    CANCELLED = 'order-cancelled',
    REFUNDED = 'order-refunded',
    FAILED = 'order-failed',
    AT_LOCAL_FACILITY = 'order-at-local-facility',
    OUT_FOR_DELIVERY = 'order-out-for-delivery',
}

export enum PaymentStatus {
    PENDING = 'payment-pending',
    PROCESSING = 'payment-processing',
    SUCCESS = 'payment-success',
    FAILED = 'payment-failed',
    REVERSAL = 'payment-reversal',
    CASH_ON_DELIVERY = 'payment-cash-on-delivery',
    CASH = 'payment-cash',
    WALLET = 'payment-wallet',
    AWAITING_FOR_APPROVAL = 'payment-awaiting-for-approval',
}

export enum PaymentGateway {
    // STRIPE = 'STRIPE',
    CASH_ON_DELIVERY = 'CASH_ON_DELIVERY',
    CASH = 'CASH',
    FULL_WALLET_PAYMENT = 'FULL_WALLET_PAYMENT',
    // PAYPAL = 'PAYPAL',
    // RAZORPAY = 'RAZORPAY',
}

@Entity()
export class Order extends CoreEntity {
    @Column()
    tracking_number: string;

    @ManyToOne(() => User, customer => customer.orders)
    customer: User;

    @Column({
        type: 'enum',
        enum: OrderStatus,
        default: OrderStatus.PENDING
    })
    status: OrderStatus;

    @Column({
        type: 'enum',
        enum: PaymentStatus,
        default: PaymentStatus.PENDING
    }
    )
    payment_status: PaymentStatus;

    @Column({
        type: 'enum',
        enum: PaymentGateway
    })
    payment_gateway?: PaymentGateway;

    @Column()
    amount: number;

    @Column()
    sales_tax: number;

    @Column()
    total: number;

    @Column()
    paid_total: number;
    // coupon?: Coupon;

    @Column()
    discount?: number;

    @Column()
    delivery_fee: number;

    @Column()
    delivery_time: string;

    @OneToMany(() => OrderItem, orderItems => orderItems.order)
    orderItems: OrderItem[]

    @OneToMany(() => Address, address => address.order)
    address: Address[];

}


@Entity()
export class OrderItem extends CoreEntity {
    @ManyToOne(() => Order, order => order.orderItems)
    order: Order

    @ManyToOne(() => Product, product => product.orderItems)
    product: Product

    @Column()
    quantity: number

    @Column()
    unit_price: number
}