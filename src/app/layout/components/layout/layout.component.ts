import { Component } from '@angular/core';
import { ISideNavToggle } from '../../interfaces/iside-nav-toggle';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  screenWidth: number = 0;
  isSideNavCollapsed: boolean = false;
  onToggleSideNav(data: ISideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
