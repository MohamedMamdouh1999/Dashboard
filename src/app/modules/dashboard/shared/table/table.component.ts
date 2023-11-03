import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() home: boolean = false;
  @Input() trainees: boolean = false;
  @Input() topTrainees: boolean = false;
  @Input() minimumTrainees: boolean = false;
  @Input() groups: boolean = false;
}
