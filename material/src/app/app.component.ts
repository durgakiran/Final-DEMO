import { Component, OnInit,ViewEncapsulation,ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { APPCONFIG } from './config';


import 'styles/app.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  providers: [],
 encapsulation: ViewEncapsulation.None
 
 
})
export class AppComponent implements OnInit {
  isActive = false;
  public AppConfig: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.AppConfig = APPCONFIG;

    // Scroll to top on route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
