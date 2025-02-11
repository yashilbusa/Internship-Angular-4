import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRmDecimalPoint]',
  standalone: true
})
export class RmDecimalPointDirective {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    let value = this.el.nativeElement.value;
    this.el.nativeElement.value = Math.trunc(value);
    console.log(value);
  }
}
