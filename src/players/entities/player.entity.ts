import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TournamentsTeamsPlayer } from "src/tournaments-teams-players/entities/tournaments-teams-player.entity";

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

    @Column({ name: 'birth_date', type: 'date' })
    birthDate: string;

    @Column({ type: 'float', nullable: true })
    height?: number;

    @Column({ type: 'float', nullable: true })
    weight?: number;

    @OneToMany(() => TournamentsTeamsPlayer, (tournamentsTeamsPlayer) => tournamentsTeamsPlayer.player)
    tournamentTeamPlayers: TournamentsTeamsPlayer[];
}
