import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tournament } from "src/tournaments/entities/tournament.entity";
import { TournamentsTeamsPlayer } from "src/tournaments-teams-players/entities/tournaments-teams-player.entity";

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

    @OneToMany(() => TournamentsTeamsPlayer, (tournamentsTeamsPlayer) => tournamentsTeamsPlayer.tournamentsTeam.id)
    tournamentsTeamsPlayer: TournamentsTeamsPlayer[];

    @Column()
    name: string;

    @Column()
    city: string;
}
