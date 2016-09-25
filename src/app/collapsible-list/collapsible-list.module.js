"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var collapsible_list_component_1 = require('./collapsible-list.component');
var collapsible_list_directive_1 = require('./collapsible-list.directive');
var angular2_materialize_1 = require('angular2-materialize');
var CollapsibleListModule = (function () {
    function CollapsibleListModule() {
    }
    CollapsibleListModule.prototype.hmrOnDestroy = function (store) {
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
    };
    CollapsibleListModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        /* store.disposeOldHosts();
         delete store.disposeOldHosts;*/
    };
    CollapsibleListModule = __decorate([
        core_1.NgModule({
            declarations: [
                collapsible_list_component_1.CollapsibleList,
                collapsible_list_directive_1.CollapsibleListDirective
            ],
            imports: [
                angular2_materialize_1.MaterializeModule,
                common_1.CommonModule
            ],
            exports: [collapsible_list_component_1.CollapsibleList],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], CollapsibleListModule);
    return CollapsibleListModule;
}());
exports.CollapsibleListModule = CollapsibleListModule;
//# sourceMappingURL=collapsible-list.module.js.map