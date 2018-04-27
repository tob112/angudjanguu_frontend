/**
 * Created by tobi on 8/21/17.
 */

import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Domain } from './domain.interace';
import { ActiveDomainsService } from './activeDomainsService';

@Component({
  selector: 'activeDomains',
  templateUrl: './activeDomains.html',
  styleUrls: ['./activeDomains.sass'],
})
export class ActiveDomainsComponent implements OnInit {


  public activeDomainsDisplayed: Domain[] = [];

  constructor(private _activeDomains: ActiveDomainsService) {
    this.activeDomainsDisplayed = _activeDomains.getTodoList();
  }

  ngOnInit(): void {

  }


}
