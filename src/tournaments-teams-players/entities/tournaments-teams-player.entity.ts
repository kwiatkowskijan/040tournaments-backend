import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tournament_team_players")
export class TournamentsTeamsPlayer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'tournament_team_id'})
    teamId: number;

    @Column({name: 'player_id'})
    playerId: number;

    @Column()
    number: number;

    @Column({name: 'is_captain'})
    isCaptain: boolean;
}
