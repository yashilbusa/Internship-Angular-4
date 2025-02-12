import { formatDate } from '@angular/common';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDateTimeConverter]',
  standalone: true
})
export class DateTimeConverterDirective {

  @Input() inputDateTime: string = '';  

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.inputDateTime) {
      const convertedTime = this.convertToPST(this.inputDateTime);
      this.el.nativeElement.textContent = convertedTime;  
    }
  }

  convertToPST(dateTimeStr: string): string {
    const dateTime = new Date(dateTimeStr);  
    const options = {
      timeZone: 'America/Los_Angeles',  
      hour12: true,                    
    };

    const pstTime = dateTime.toLocaleString('en-US', options);
    return pstTime;
  }
}
