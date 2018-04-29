import {
  Directive,
  ComponentRef,
  ElementRef,
  Input,
  TemplateRef,
  Injector,
  Renderer2,
  ComponentFactoryResolver,
  ViewContainerRef,
  HostListener,
  Type,
  ReflectiveInjector,
  OnDestroy
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy {
  @Input('tooltip') tooltip: string | TemplateRef<any> | Type<any>;

  private componentRef: ComponentRef<TooltipComponent>;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) { }

  @HostListener('mouseenter') handleMouseEnter() {
    if (this.componentRef) {
      return;
    }

    const factory = this.resolver.resolveComponentFactory(TooltipComponent);
    const injector = ReflectiveInjector.resolveAndCreate([
      {
        provide: 'tooltipConfig',
        useValue: {
          host: this.element.nativeElement
        }
      }
    ]);

    this.componentRef = this.vcr.createComponent(
      factory, 0, injector, this.generateNgContent()
    );
  }

  @HostListener('mouseout') handleMouseOut() {
    this.destroy();
  }

  generateNgContent() {
    if (typeof this.tooltip === 'string') {
      const contentEl = this.renderer.createText(this.tooltip);
      return [ [ contentEl ] ];
    }
  }

  destroy() {
    if ( this.componentRef ) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
