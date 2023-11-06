import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent {
  @Output() visible = new EventEmitter<boolean>();
  @Input() organizationStructure: boolean = false;
  @Input() title: string = '';
  visibleModel(visible: boolean){
    this.visible.emit(visible)
  }
}
