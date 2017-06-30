import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './analysis.component';

const routes: Routes = [
  {
    path: '',
    component: AnalysisComponent,
  },
];

export const routing = RouterModule.forChild(routes);
