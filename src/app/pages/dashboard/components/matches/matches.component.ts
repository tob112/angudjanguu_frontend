/**
 * Created by tobi on 8/21/17.
 */

import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Match } from './match.interface';

@Component({
  selector: 'matches',
  templateUrl: './matches.html',
  styleUrls: ['./matches.sass'],
})
export class MatchesComponent implements OnInit {


  private baseMatches;
  private baseUsers;
  public rows = [];
  public matchesDisplay: Match[] = [];


  constructor(private restangular: Restangular) {
  }

  ngOnInit(): void {
    this.baseMatches = this.restangular.all('matches');  // api/v1/auth/matches/


    this.baseMatches.getList().subscribe(matches => {
      for (const match of matches) {
        console.log();
        this.matchesDisplay.push(
          {
            datum: match['datum'],
            team1: match['team_1']['team_name'],
            team2: match['team_2']['team_name'],
            ergebnis: `${String(match['goals_team_1'])}:${String(match['goals_team_2'])}`,
          },
        );
      }
    });


  }


}
