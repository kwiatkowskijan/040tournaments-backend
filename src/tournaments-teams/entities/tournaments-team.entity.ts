import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tournament } from "src/tournaments/entities/tournament.entity";

@Entity("tournament_teams")
export class TournamentsTeam {
    // @Column({ name: 'tournament_id'})
    // tournamentId: number;
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Tournament)
    @JoinColumn({
        name: 'tournament_id',
    })
    tournament: Tournament;

    @Column()
    name: string;

    @Column()
    city: string;
}
