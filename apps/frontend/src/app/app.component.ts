import { Component } from '@angular/core';

@Component({
  selector: 'distrox-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  constructor(){
    console.log("Hola Mundo")
  }
}
