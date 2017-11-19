import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module'
import { FlexLayoutModule} from '@angular/flex-layout';
import { UIRoutingModule } from './ui-routing.module';
import { UIComponent } from './ui.component';
import {UICardsComponent} from './cards/cards.component';

@NgModule({
    imports: [
        CommonModule,       
        UIRoutingModule,
       MaterialModule,
        FlexLayoutModule,
        //BrowserAnimationsModule    
    ],
    declarations: [
        UIComponent ,
        UICardsComponent       
    ]
})
export class UIModule {}