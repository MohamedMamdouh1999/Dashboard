import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ar_EG, en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ar from '@angular/common/locales/ar';
import en from '@angular/common/locales/en';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private translate: TranslateService, private i18n: NzI18nService){
    this.translate.onLangChange.subscribe({
      next: () => {
        if(this.translate.currentLang === 'ar'){
          this.isRtl = true;
          this.i18n.setLocale(ar_EG);
        } else {
          this.isRtl = false;
          this.i18n.setLocale(en_US);
        }
      }
    })
  }

  @Input() home: boolean = false;
  @Input() trainingCourses: boolean = false;
  @Input() trainees: boolean = false;
  @Input() groups: boolean = false;
  dateFormat: string = 'yyyy/MM/dd';
  isRtl: boolean = true;

  ngOnInit(): void {
    if(this.isRtl){
      registerLocaleData(ar);
      this.i18n.setLocale(ar_EG);
    } else {
      registerLocaleData(en);
      this.i18n.setLocale(en_US);
    }

  }
}
