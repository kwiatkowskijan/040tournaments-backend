import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tournament_teams")
export class TournamentsTeam {
    @Column({ name: 'tournament_id'})
    tournamentId: number;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    city: string;
}
