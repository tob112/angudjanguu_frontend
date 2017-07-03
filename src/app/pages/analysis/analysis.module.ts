import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { AnalysisComponent } from './analysis.component';
import { routing } from './analysis.routing';
import { HttpModule } from '@angular/http';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomDualListComponent } from './components/dualist/dualist.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
    NgaModule,
    AngularFormsModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    NgxDatatableModule,
  ],
  declarations: [
    AnalysisComponent,
    CustomDualListComponent,
  ],
  providers: [],
})
export class AnalysisModule {
}
