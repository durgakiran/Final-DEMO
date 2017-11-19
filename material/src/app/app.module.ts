import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { MaterialModule } from './material.module';
// flex-layout

import { ObservableMedia } from '@angular/flex-layout';
import { FlexLayoutModule, MediaService } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './layout/header/header.component';
import{MediaQueryStatus } from './media-query-status';
import {LayoutComponent} from './layout/layout.component';
import {LayoutModule} from './layout/layout.module';


import {DashboardComponent} from './dashboard/dashboard.component';

import {SideNavComponent} from './layout/sidenav/sidenav.component';
import{MatCardModule} from './card/card-module';

@NgModule({
  imports: [
    BrowserModule,
     FormsModule, 
     ReactiveFormsModule,
     MaterialModule,
      FlexLayoutModule, 
      AppRoutingModule,
      BrowserAnimationsModule,
      LayoutModule,
    //  DashboardModule
      ],

  declarations: [
    AppComponent, 
   // HelloComponent,
    LayoutComponent,
    HeaderComponent,
    SideNavComponent,
    MediaQueryStatus,
  // DashboardComponent
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
