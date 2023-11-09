import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent {
  @Output() visible = new EventEmitter<boolean>();
  @Input() organizationStructure!: boolean;
  @Input() roleManagement!: boolean;
  @Input() usersManagement!: boolean;
  @Input() title!: string;
  visibleModel(visible: boolean){
    this.visible.emit(visible)
  }
}
