import { Attachment } from "src/common/entities/attachment.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, ManyToMany } from "typeorm";

@Entity()
export class Category extends Attachment {
    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    details?: string;

    @ManyToMany(() => Product, products => products.categories)
    products?: Product[];

}
