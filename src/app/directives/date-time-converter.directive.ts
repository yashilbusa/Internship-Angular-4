import { formatDate } from '@angular/common';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDateTimeConverter]',
  standalone: true
})

export class DateTimeConverterDirective {

  @Input() inputDateTime: string = '';  

  constructor(private el: ElementRef) {}

  @HostListener('input') onInput(){
    let date :string = this.el.nativeElement.value
    let update:Date = new Date(date)
    
    let value:any = update.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
    }) 

    console.log(value);
  }
}
