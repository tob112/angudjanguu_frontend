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
    {
      'datum': '22.08.2017',
      'verteidigungA': 'Alex',
      'angriffA': 'Tobi',
      'verteidigungB': 'Christian',
      'angriffB': 'Stefan',
      'ergebnis': '3:0',
    }, {
      'datum': '22.08.2017',
      'verteidigungA': 'Alex',
      'angriffA': 'Tobi',
      'verteidigungB': 'Christian',
      'angriffB': 'Stefan',
      'ergebnis': '3:0',
    },
    {
      'datum': '22.08.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    }, {
      'datum': '22.08.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    }, {
      'datum': '22.08.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    }, {
      'datum': '22.08.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    }, {
      'datum': '22.08.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    },
    {
      'datum': '22.12.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    }, {
      'datum': '22.12.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    }, {
      'datum': '22.12.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    }, {
      'datum': '22.12.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    }, {
      'datum': '22.12.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    }, {
      'datum': '22.12.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    }, {
      'datum': '22.12.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    },{
      'datum': '22.12.2017',
      'verteidigungA': 'asd',
      'angriffA': 'asf',
      'verteidigungB': 'ag',
      'angriffB': 'asg',
      'ergebnis': '34:0',
    },
  ];
  columns = [
    {prop: 'datum'},
    {name: 'Verteidigung'},
    {name: 'Company'},
  ];


}
