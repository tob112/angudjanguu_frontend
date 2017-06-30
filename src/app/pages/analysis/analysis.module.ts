import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { AnalysisComponent } from './analysis.component';
import { routing } from './analysis.routing';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
    NgaModule,
  ],
  declarations: [
    AnalysisComponent,
  ],
  providers: [

  ],
})
export class AnalysisModule {}
