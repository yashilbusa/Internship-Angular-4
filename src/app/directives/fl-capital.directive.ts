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
    value.split(' ').map((i:any) => i.charAt(0).toUpperCase() + i.slice(1)).join(' ')
    this.capitalFirstWord.emit(value)
  }
}