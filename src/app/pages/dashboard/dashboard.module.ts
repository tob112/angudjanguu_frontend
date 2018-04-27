import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

import { MatchesComponent } from './components/matches';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ActiveDomainsComponent } from './components/activeDomains/activeDomains.component';
import { ActiveDomainsService } from './components/activeDomains/activeDomainsService';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    NgxDatatableModule,
  ],
  declarations: [
    ActiveDomainsComponent,
    MatchesComponent,
    DashboardComponent,
  ],
  providers: [
    ActiveDomainsService
  ],
})
export class DashboardModule {


}
