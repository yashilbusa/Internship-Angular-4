import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFlCapital]',
  standalone: true
})
export class FlCapitalDirective {

  @Output() capitalFirstWord = new EventEmitter()
  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    let value = this.el.nativeElement.value;
    value = value.charAt(0).toUpperCase() + value.slice(1);
    this.capitalFirstWord.emit(value)
  }
}