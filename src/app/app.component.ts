import { Component } from '@angular/core';
import { DemoComponent } from "./demo/demo.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DemoComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  inputtext =""
  destroy = true

  onClick(inputele:HTMLInputElement){
    this.inputtext = inputele.value
  }

  destroyComponent(){
    this.destroy = false
  }
}