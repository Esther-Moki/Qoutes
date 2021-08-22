import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCountvotes]'
})
export class CountvotesDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.textDecoration='line-through';
   }

}
