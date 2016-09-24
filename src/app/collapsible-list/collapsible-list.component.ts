import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from '../app.service';

const LIST_ITEMS: String[] = [
      'One',
      'Two',
      'Three'
  ];

@Component({
  selector: 'collapsible-list',
  styleUrls: [ './collapsible-list.style.scss' ],
  templateUrl: './collapsible-list.html'
})

export class CollapsibleList {

  constructor(
    public appState: AppState) {
  }


  ngOnInit() {
    console.log('collapsable List', this.appState.state);
    this.appState.set('list-items', LIST_ITEMS);
    console.log('Added list items', this.appState._state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
