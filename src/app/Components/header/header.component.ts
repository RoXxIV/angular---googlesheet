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
    loop: true
  };

    const writer = new Typewriter(target, options);
    writer
  .strings(
    400,
    'Quelle est votre language préférée ?',

  )
  .start();
  }

}
