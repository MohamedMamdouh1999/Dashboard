import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { notifications, userItems } from './header-dummy-data';
import { IUserItem } from '../../interfaces/iuser-item';
import { INotification } from '../../interfaces/inotification';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public translate: TranslateService) {
    this.currentLanguage = localStorage.getItem("currentLanguage") || "ar";
    this.translate.use(this.currentLanguage)
    this.translate.onLangChange.subscribe({
      next: () => this.isRtl = this.translate.currentLang === "ar" ? true : false
    })
  }

  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;
  currentLanguage: string;
  isRtl: boolean = true;
  userItems: IUserItem[] = userItems;
  notifications: INotification[] = notifications;

  changeCurrentLanguage(language: string){
    this.translate.use(language)
    localStorage.setItem("currentLanguage", language)
  }
  getHeadClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'head-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'head-md-screen'
    }
    return styleClass;
  }
}
