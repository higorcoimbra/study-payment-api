import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export default class Item {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    description: string;
}