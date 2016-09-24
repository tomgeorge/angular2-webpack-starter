import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapsibleList } from './collapsible-list.component';

import { MaterializeDirective } from 'angular2-materialize';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from '../environment';
// App is our top level component
import { AppState } from '../app.service';

@NgModule({
  declarations: [
    CollapsibleList,
    MaterializeDirective
  ],

  imports: [ //import materialize stuff
  ],

  providers: [ // expose our Services and Providers into Angular's dependency injection

  ]
})

export class CollapsibleListModule {
  constructor() {}

  hmrOnDestroy(store: AppState) {
   /* const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();*/
  }

  hmrAfterDestroy(store: AppState) {
    // display new elements
   /* store.disposeOldHosts();
    delete store.disposeOldHosts;*/
  }

}

