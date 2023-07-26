import { Component, OnInit } from '@angular/core';
import {ColDef, GridOptions} from 'ag-grid';

@Component({
  selector: 'app-second-grid',
  templateUrl: './second-grid.component.html',
  styleUrls: ['./second-grid.component.css']
})
export class SecondGridComponent implements OnInit {

  displayedColumns: ColDef[] = [
    { headerName: 'Day', width: 100, field: 'day' },
    { headerName: 'Open', width: 100, field: 'open' },
    { headerName: 'Close', width: 100, field: 'close' }
  ];
  private gridOptions: GridOptions;
  opHours = [
    {'day': 'Sun', 'open': '8:00', 'close': '22:00'},
    {'day': 'Mon', 'open': '8:00', 'close': '22:00'}
  ];

  constructor() { }

  ngOnInit() {
  }

}