import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() title!: string;
  @Input() head1!: string;
  @Input() head2!: string;
  @Input() head3!: string;
  @Input() groups!: boolean;
}
