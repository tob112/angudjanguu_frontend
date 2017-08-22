/**
 * Created by tobi on 8/21/17.
 */

import { Component } from '@angular/core';


@Component({
  selector: 'matches',
  templateUrl: './matches.html',
  styleUrls: ['./matches.sass'],
})
export class MatchesComponent {


  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' },
  ];


}
