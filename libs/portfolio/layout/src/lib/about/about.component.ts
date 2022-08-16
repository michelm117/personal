import { Component } from '@angular/core';
import { trigger, style, animate, transition, sequence } from '@angular/animations';

@Component({
  selector: 'personal-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('flyInLeft', [
      transition('void => *', [
        style({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }),
        // sequence([
        animate(
          '.45s ease',
          style({
            height: '*',
            opacity: '1',
            transform: 'translateX(0)',
            'box-shadow': 'none',
          })
        ),
      ]),
    ]),

    trigger('flyInRight', [
      transition('void => *', [
        style({ height: '*', opacity: '0', transform: 'translateX(550px)', 'box-shadow': 'none' }),
        // sequence([
        animate(
          '.45s ease',
          style({
            height: '*',
            opacity: '1',
            transform: 'translateX(0)',
            'box-shadow': 'none',
          })
        ),
      ]),
    ]),

    trigger('flyInUp', [
      transition('void => *', [
        style({ height: '*', opacity: '0', transform: 'translateY(550px)', 'box-shadow': 'none' }),
        // sequence([
        animate(
          '.45s ease',
          style({
            height: '*',
            opacity: '1',
            transform: 'translateY(0)',
            'box-shadow': 'none',
          })
        ),
      ]),
    ]),
  ],
})
export class AboutComponent {}
