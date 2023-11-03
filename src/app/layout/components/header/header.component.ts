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
  constructor(private translate: TranslateService) {
    this.currentLanguage = localStorage.getItem("currentLanguage") || "ar";
    this.translate.onLangChange.subscribe({
      next: () => this.isRtl = this.translate.currentLang === "ar" ? true : false
    })
    this.translate.use(this.currentLanguage)
  }

  @Input() screenWidth: number = 0;
  @Input() collapsed: boolean = false;
  notifications: INotification[] = notifications;
  userItems: IUserItem[] = userItems;
  currentLanguage: string;
  isRtl: boolean = true;

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
