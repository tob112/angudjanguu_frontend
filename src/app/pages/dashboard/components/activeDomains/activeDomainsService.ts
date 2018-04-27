/**
 * Created by tobi on 4/27/18.
 */

import { Injectable } from '@angular/core';
import { Domain } from 'app/pages/dashboard/components/activeDomains/domain.interace';


@Injectable()
export class ActiveDomainsService {

  private _activeDomains: Domain[] = [
    { domain: 'test@google.com' },
    { domain: 'test@telekom.com' },
    { domain: 'test@apple.com' },
    { domain: 'test@facebook.com' },
  ];

  getTodoList() {
    return this._activeDomains;
  }
}
