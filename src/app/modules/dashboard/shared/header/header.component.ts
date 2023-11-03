import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private translate: TranslateService, private i18n: NzI18nService){
    this.i18n.setLocale(en_US);
  }
  @Input() home: boolean = false;
  @Input() trainingCourses: boolean = false;
  @Input() trainees: boolean = false;
  @Input() groups: boolean = false;
  dateFormat: string = 'yyyy/MM/dd';
  isRtl: boolean = true;
  ngOnInit(): void {
    this.translate.currentLang === 'ar' ? this.isRtl = true : this.isRtl = false
  }
}
