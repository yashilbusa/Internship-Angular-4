import { Component } from '@angular/core';
import { DemoComponent } from "./demo/demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  inputtext =""
  onClick(inputele:HTMLInputElement){
    this.inputtext = inputele.value
  }
}