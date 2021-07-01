import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const target = document.querySelector('.tw');

    const options = {
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
  };

    const writer = new Typewriter(target, options);
    writer
  .strings(
    600,
    'Javascript',
    'Python',
    'Php',
    'Java',
    'C#',
    'Swift'

  )
  .start();
  }

}
