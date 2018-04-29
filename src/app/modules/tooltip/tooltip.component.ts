import {
  Component,
  Directive,
  OnInit,
  ViewChild,
  ElementRef,
  Inject
} from '@angular/core';

@Directive({
  selector: '.tooltip__container'
})
export class TooltipContainerDirective {}

@Component({
  selector: 'tooltip',
  template: `
    <div class="tooltip__container" [ngStyle]="{top: top}">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  private top: string;

  @ViewChild(TooltipContainerDirective, { read: ElementRef })
  private tooltipContainer;

  constructor(@Inject('tooltipConfig') private config) { }

  ngOnInit() {
    const { top } = this.config.host.getBoundingClientRect();
    const { height } = this.tooltipContainer.nativeElement.getBoundingClientRect();

    this.top = `${top - height}px`;
  }
}
