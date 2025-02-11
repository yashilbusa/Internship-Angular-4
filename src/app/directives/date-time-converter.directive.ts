import { formatDate } from '@angular/common';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDateTimeConverter]',
  standalone: true
})
export class DateTimeConverterDirective {

  @Input() dateTime!: string | Date ;
  date: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const date = new Date();
    const updatedate = new Date(this.date.getTime()+330*60000);
    this.el.nativeElement.textContent = updatedate;
    console.log(updatedate);
  }
}
