import { formatDate } from '@angular/common';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDateTimeConverter]',
  standalone: true
})
export class DateTimeConverterDirective {

  @Input() dateTime!: string | Date ;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const date = new Date(this.dateTime);

    const pstDate = new Date(date.getTime() + (-8 * 60 * 60 * 1000));
    this.el.nativeElement.textContent = pstDate;
    console.log(pstDate);
  }
}
