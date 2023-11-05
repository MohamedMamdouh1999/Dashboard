import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent {
  @Input() organizationStructure: boolean = false;
  @Input() title: string = '';
}
