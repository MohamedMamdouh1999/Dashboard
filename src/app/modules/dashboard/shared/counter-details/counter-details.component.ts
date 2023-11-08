import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-details',
  templateUrl: './counter-details.component.html',
  styleUrls: ['./counter-details.component.scss']
})
export class CounterDetailsComponent {
  @Input() totalOrders!: boolean;
  @Input() title!: string;
}
