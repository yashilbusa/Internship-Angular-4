import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})

export class DemoComponent implements OnInit{
  @Input() value = "Yashil Busa" 

  constructor(){ 
    console.log("Constructor Called!!!"); 
    console.log(this.value);
  }

  ngOnInit() {
    console.log("ngOnInit Called!!!");
    console.log(this.value);
  }
}
