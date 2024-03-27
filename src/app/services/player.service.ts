import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  fetchPlayers(): Observable<Player[]> {
    const defaultPlayers: Player[] = [
      { firstName: 'Joe', lastName: 'Somebody' },
      { firstName: 'Frank', lastName: 'Frankington' },
      { firstName: 'Tim', lastName: 'The Enchanter' },
    ];
    return of(defaultPlayers);
  }
}
