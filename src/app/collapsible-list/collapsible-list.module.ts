import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleList } from './collapsible-list.component';
import { CollapsibleListDirective } from './collapsible-list.directive';

import { MaterializeModule } from 'angular2-materialize';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from '../environment';
// App is our top level component
import { AppState } from '../app.service';

@NgModule({
  declarations: [
    CollapsibleList,
    CollapsibleListDirective
  ],

  imports: [ //import materialize stuff
    MaterializeModule,
    CommonModule
  ],
  exports: [ CollapsibleList ],
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

