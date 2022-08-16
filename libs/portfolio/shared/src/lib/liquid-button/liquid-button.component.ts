import { Component, Input } from '@angular/core';

@Component({
  selector: 'personal-liquid-button',
  templateUrl: './liquid-button.component.html',
  styleUrls: ['./liquid-button.component.scss'],
})
export class LiquidButtonComponent {
  // px-6 py-3 text-lg border-2 rounded-full border-my-red

  @Input() classes: string | undefined;
  @Input() text: string | undefined;

  x = [false, false, false, false];

  constructor() {
    const i = Math.floor(Math.random() * this.x.length);
    this.x[i] = true;
  }
}
