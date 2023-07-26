import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import {LicenseManager} from 'ag-grid-enterprise';

LicenseManager.setLicenseKey('AFN_LLC_MultiApp_2Devs9_April_2019__MTU1NDc2NDQwMDAwMA==dbad494e8a609d368f98d803be1d96aa');

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherise, log the boot error
}).catch(err => console.error(err));