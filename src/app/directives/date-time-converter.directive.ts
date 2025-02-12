import { formatDate } from '@angular/common';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appDateTimeConverter]',
  standalone: true
})

export class DateTimeConverterDirective {

  @Input() inputDateTime: string = '';  
  @Output() dateTimeChanged = new EventEmitter<string>(); 

  constructor(private el: ElementRef) {}

  @HostListener('input') onInput(){
    let date = this.el.nativeElement.value
    let update = new Date(date)
    
    let value = update.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
    }) 
    console.log(value);

    this.dateTimeChanged.emit(value);
  }
}
