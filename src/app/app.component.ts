import { Component } from '@angular/core';
// import { DemoComponent } from "./demo/demo.component";
import { CommonModule } from '@angular/common';
import { BoxTwoComponent } from "./box-two/box-two.component";
import { BoxOneComponent } from "./box-one/box-one.component";
import { BoxThreeComponent } from "./box-three/box-three.component";
import { BoxFourComponent } from "./box-four/box-four.component";
import { BoxFiveComponent } from "./box-five/box-five.component";
import { BoxPlaceholderComponent } from "./box-placeholder/box-placeholder.component";
import { LoaderComponent } from "./loader/loader.component";
import { ErrorComponent } from "./error/error.component";
import { DateTimeConverterDirective } from './directives/date-time-converter.directive';
import { FlCapitalDirective } from './directives/fl-capital.directive';
import { RmDecimalPointDirective } from './directives/rm-decimal-point.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BoxTwoComponent, BoxOneComponent, BoxThreeComponent, BoxFourComponent, BoxFiveComponent, BoxPlaceholderComponent, LoaderComponent, ErrorComponent, 
    DateTimeConverterDirective, FlCapitalDirective, RmDecimalPointDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // inputtext =""
  // destroy = true

  // onClick(inputele:HTMLInputElement){
  //   this.inputtext = inputele.value
  // }

  // destroyComponent(){
  //   this.destroy = false
  // }

  isVisible = false
  show(){
    this.isVisible = true
  }

}