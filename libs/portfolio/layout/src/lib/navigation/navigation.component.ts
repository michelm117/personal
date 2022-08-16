import { Component } from '@angular/core';

@Component({
  selector: 'personal-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  showMobileSideNav = false;

  toggleSideNav() {
    this.showMobileSideNav = !this.showMobileSideNav;
  }
  closeSideNav() {
    this.showMobileSideNav = false;
  }
}
