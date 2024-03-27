import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../../interfaces/player.model';
import { Subscription } from 'rxjs';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css',
})
export class PlayerListComponent implements OnInit, OnDestroy {
  players: Player[] | null = null;
  playerSubscription: Subscription | null = null;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerSubscription = this.playerService.fetchPlayers().subscribe({
      next: (players) => {
        this.players = players;
      },
      error: (err) => {
        console.log('err: ', err.message);
      },
      complete: () => {
        console.log('players fetched');
      },
    });
  }

  ngOnDestroy() {
    this.playerSubscription?.unsubscribe();
  }
}
