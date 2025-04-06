import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "src/players/entities/player.entity";

@Entity("tournament_team_players")
export class TournamentsTeamsPlayer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'tournament_team_id'})
    teamId: number;

    @Column({name: 'player_id'})
    playerId: number;

    @ManyToOne(() => Player, (player) => player.tournamentTeamPlayers)
    @JoinColumn({
        name: 'player_id',
    })
    player: Player;

    @Column()
    number: number;

    @Column({name: 'is_captain'})
    isCaptain: boolean;
}
