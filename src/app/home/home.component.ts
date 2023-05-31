import { Component } from '@angular/core';
// import { TypewriterState } from 'typewriter-effect';
// import { Typewriter } from "node_modules/t-writer.js/dist/t-writer.js";
// import { TypewriterClass } from 'typewriter-effect';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  display=true
  toggle()
  {
this.display=!this.display;
  }
  }
