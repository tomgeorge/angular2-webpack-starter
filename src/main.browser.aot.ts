import 'ts-helpers';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';


import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from './compiled/app/app.module.ngfactory';


export function main() {
    return platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
        .catch(err => console.log(err));
}

export function bootstrapDomReady() {
    document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();