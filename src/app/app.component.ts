import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.onLangChange.subscribe({
      next: () => this.isRtl = this.translate.currentLang === "ar" ? true : false
    })
  }
  isRtl: boolean = true;
}
