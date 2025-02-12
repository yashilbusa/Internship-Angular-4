import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appRmDecimalPoint]',
  standalone: true
})
export class RmDecimalPointDirective {

  @Output() removeDecimalPoint = new EventEmitter()
  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    let value = this.el.nativeElement.value;
    value = Math.trunc(value);
    this.removeDecimalPoint.emit(value)
  }
}
