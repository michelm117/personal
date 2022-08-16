import { Component, OnInit } from '@angular/core';
import { faGithub, faFacebook, faStrava } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'personal-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  faGithub = faGithub;
  faFacebook = faFacebook;
  faCode = faStrava;
  faEnvelope = faEnvelope;

  ngOnInit(): void {
    const target = document.querySelector('#heading');
    const writer = new Typewriter(target, {
      loop: false,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'white',
      cursorColor: 'white',
    });
    writer.type('I am Marc Michel').removeCursor().start();
  }
}
