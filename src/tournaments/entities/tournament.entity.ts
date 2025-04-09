import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TournamentsTeam } from "src/tournaments-teams/entities/tournaments-team.entity";

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

    @OneToMany(() => TournamentsTeam, (tournamentsTeam) => tournamentsTeam.tournament)
    tournamentsTeams: TournamentsTeam[];
}