import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';


const AppRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: LayoutComponent },
  
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});
