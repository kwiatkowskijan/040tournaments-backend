import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("players")
export class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column({name: "birth_date", type: 'date'})
    birthDate: string;

    // @Column( type: 'float', nullable: true)
    // height: number | null;

    //  @Column()
    // weight: number | null;
}
