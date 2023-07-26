import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { SecondGridComponent } from './second-grid/second-grid.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AgGridModule.withComponents([]) ],
  declarations: [ AppComponent, HelloComponent, SecondGridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
