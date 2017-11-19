import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'

import { ObservableMedia } from '@angular/flex-layout';
import { FlexLayoutModule, MediaService } from '@angular/flex-layout';
import{MediaQueryStatus } from '../media-query-status';
import { LayoutRoutingModule } from './layout.route';
import { LayoutComponent } from './layout.component';
import {SideNavComponent} from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '../card/card-module';
import { DashboardComponent } from '../dashboard/dashboard.component';
// flex-layout
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { ObservableMedia } from '@angular/flex-layout';

// material
////import { MdGridListModule } from '@angular/material';

// rxjs
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    MatCardModule
 
    
  ],
  declarations: [
   
    DashboardComponent
     ],
  providers:[MediaService]
})
export class LayoutModule { }