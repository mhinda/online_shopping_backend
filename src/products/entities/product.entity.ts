import { Category } from "src/categories/entities/category.entity";
import { CoreEntity } from "src/common/entities/core.entity";
import { Shop } from "src/shops/entities/shop.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";

@Entity()
export class Product extends CoreEntity {
    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    description: string;

    @ManyToMany(() => Category, categories => categories.products)
    @JoinTable({ name: 'product_category' })
    categories: Category[];

    // tags?: Tag[];

    // orders?: Order[];

    @ManyToOne(() => Shop, shop => shop.products)
    shop: Shop;

    @Column()
    in_stock: boolean;

    @Column()
    is_taxable: boolean;

    @Column()
    sale_price?: number;

    @Column()
    max_price?: number;

    @Column()
    min_price?: number;

    @Column()
    sku?: string;

    // gallery?: Attachment[];

    // image?: Attachment;

    @Column()
    status: boolean;

    @Column()
    height?: string;

    @Column()
    length?: string;

    @Column()
    width?: string;

    @Column()
    price?: number;

    @Column()
    quantity: number;

    @Column()
    unit: string;

    // ratings: number;

    // in_wishlist: boolean;

    // my_review?: Review[];

}
