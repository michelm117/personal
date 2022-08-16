import { Component, Input } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'personal-liquid-icon-button',
  templateUrl: './liquid-icon-button.component.html',
  styleUrls: ['./liquid-icon-button.component.scss'],
})
export class LiquidIconButtonComponent {
  @Input() classes: string | undefined;
  @Input() faIcon = faGithub;

  x = [false, false, false, false];

  constructor() {
    const i = Math.floor(Math.random() * this.x.length);
    this.x[i] = true;
  }
}
