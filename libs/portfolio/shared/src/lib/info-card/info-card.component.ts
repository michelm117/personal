import { Component, Input } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'personal-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Input() faIcon = faLocationDot;
  @Input() title = 'Locate me';
  @Input() message = 'Freiburg im Breisgau';
}
