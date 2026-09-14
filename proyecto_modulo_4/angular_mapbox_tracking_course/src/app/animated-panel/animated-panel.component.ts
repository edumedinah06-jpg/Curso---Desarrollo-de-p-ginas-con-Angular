import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-animated-panel',
  standalone: true,
  templateUrl: './animated-panel.component.html',
  animations: [
    trigger('panelAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-12px)' }),
        animate('350ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition('* => *', [
        style({ opacity: 0.4, transform: 'scale(.98)' }),
        animate('250ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class AnimatedPanelComponent {
  @Input() count = 0;
}