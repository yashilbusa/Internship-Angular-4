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

    const pstDate = new Date(date.getTime() + (-11 * 60 * 60 * 1000));

    const formattedDate = formatDate(pstDate, 'yyyy-MM-dd HH:mm:ss', 'en-US');
    this.el.nativeElement.textContent = formattedDate;
  }
}
