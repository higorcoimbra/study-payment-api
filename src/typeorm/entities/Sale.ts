import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm"
import Item from "./Item"

@Entity()
export default class Sale {
    @PrimaryColumn("uuid")
    id: string

    @Column()
    salesmanId: string

    @Column("datetime")
    date: Date

    @Column()
    orderId: string

    @ManyToMany(() => Item)
    @JoinTable()
    items: Item[]
}