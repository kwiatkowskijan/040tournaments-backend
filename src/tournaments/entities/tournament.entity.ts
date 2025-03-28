import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tournaments")
export class Tournament {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ name: 'start_date', type: "date" })
    startDate: string;

    @Column({ name: 'end_date', type: "date" })
    endDate: string;

    @Column()
    place: string;

    @Column({name: 'max_players_in_team', type: 'int'})
    maxPlayersInTeam: number;
}
