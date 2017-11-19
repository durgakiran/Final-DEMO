import { Component, OnInit, } from '@angular/core';

import { ObservableMedia } from '@angular/flex-layout';
// rxjs
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";



@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  //config = CHARTCONFIG;
  public cols: Observable<number>;
  
  constructor(private observableMedia: ObservableMedia) {}
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  gridlist: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'}  ,
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'}, 
  ];
 

  dogs: Object[] = [
    { name: 'Porter', human: 'Kara' },
    { name: 'Mal', human: 'Jeremy' },
    { name: 'Koby', human: 'Igor' },
    { name: 'Razzle', human: 'Ward' },
    { name: 'Molly', human: 'Rob' },
    { name: 'Husi', human: 'Matias' },
  ];

  basicRowHeight = 80;
  fixedCols = 4;
  fixedRowHeight = 100;
  ratioGutter =10;
  fitListHeight = '400px';
  ratio = '4:1';

  addTileCols() { this.tiles[2].cols++; }

  ngOnInit() {
    const grid = new Map([
      ["xs", 1],
      ["sm", 2],
      ["md", 2],
      ["lg", 2],
      ["xl", 2]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => grid.get(change.mqAlias))
      .startWith(start);
  }



}
