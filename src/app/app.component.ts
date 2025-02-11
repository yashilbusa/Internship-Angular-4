import { Component } from '@angular/core';
// import { DemoComponent } from "./demo/demo.component";
import { CommonModule } from '@angular/common';
import { BoxTwoComponent } from "./box-two/box-two.component";
import { BoxOneComponent } from "./box-one/box-one.component";
import { BoxThreeComponent } from "./box-three/box-three.component";
import { BoxFourComponent } from "./box-four/box-four.component";
import { BoxFiveComponent } from "./box-five/box-five.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BoxTwoComponent, BoxOneComponent, BoxThreeComponent, BoxFourComponent, BoxFiveComponent],
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






}