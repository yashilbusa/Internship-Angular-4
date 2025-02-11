import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRmDecimalPoint]',
  standalone: true
})
export class RmDecimalPointDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    let value = this.el.nativeElement.value;
    this.el.nativeElement.value = Math.trunc(value);
  }
}
