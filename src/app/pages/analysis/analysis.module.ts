import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { AnalysisComponent } from './analysis.component';
import { routing } from './analysis.routing';
import { HttpModule } from '@angular/http';

import { AddressComponent } from './Component/Adress/adress.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
    NgaModule,
    AngularFormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AnalysisComponent,
    AddressComponent,
  ],
  providers: [],
})
export class AnalysisModule {
}
