import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'  },
          { path: 'dashboard', component: DashboardComponent},
            { path: 'ui', loadChildren: '../ui/ui.module#UIModule'}
           
                
                       ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}