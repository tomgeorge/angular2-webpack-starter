import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[collapsible-list]' })
/** Highlight the attached element in gold */
export class CollapsibleListDirective {
  constructor(renderer: Renderer, el: ElementRef) {

  }
}