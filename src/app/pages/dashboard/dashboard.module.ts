import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

import { MatchesComponent } from './components/matches';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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
    MatchesComponent,
    DashboardComponent,
  ],
  providers: [],
})
export class DashboardModule {


}
