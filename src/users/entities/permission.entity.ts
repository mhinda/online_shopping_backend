import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Permission extends CoreEntity {
    @Column()
    name?: string;

    @Column()
    guard_name?: string;

    // @Column()
    // pivot?: any;
}