import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrl: './counter-card.component.scss'
})
export class CounterCardComponent {
  @Input() total!: number;
  @Input() description!: string;
  @Input() student!: boolean;
  @Input() hour!: boolean;
  @Input() groups!: boolean;
  @Input() tracks!: boolean;
  @Input() tv!: boolean;
  @Input() analysis!: boolean;
  @Input() star!: boolean;
  @Input() bag!: boolean;
}
