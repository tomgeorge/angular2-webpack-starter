"use strict";
var core_1 = require('@angular/core');
var app_service_1 = require('../app.service');
var LIST_ITEMS = [
    'One',
    'Two',
    'Three'
];
var CollapsibleList = (function () {
    function CollapsibleList(appState) {
        this.appState = appState;
    }
    CollapsibleList.prototype.ngOnInit = function () {
        console.log('collapsable List', this.appState.state);
        this.appState.set('list-items', LIST_ITEMS);
        console.log('Added list items', this.appState._state);
    };
    CollapsibleList = __decorate([
        core_1.Component({
            selector: 'collapsible-list',
            styleUrls: ['./collapsible-list.style.scss'],
            templateUrl: './collapsible-list.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppState])
    ], CollapsibleList);
    return CollapsibleList;
}());
exports.CollapsibleList = CollapsibleList;
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
//# sourceMappingURL=collapsible-list.component.js.map