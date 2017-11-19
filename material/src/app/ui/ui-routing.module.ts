import { Routes, RouterModule } from '@angular/router';

import { UIComponent } from './ui.component';


import { UICardsComponent } from './cards/cards.component';


export const UIRoutes: Routes = [
  {
    path: 'ui',
    component: UIComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
   
      { path: 'card', component: UICardsComponent },
      
    ]
  }
];

export const UIRoutingModule = RouterModule.forChild(UIRoutes);
