import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFlCapital]',
  standalone: true
})
export class FlCapitalDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    let value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.charAt(0).toUpperCase() + value.slice(1);
    console.log(value);
  }
}
