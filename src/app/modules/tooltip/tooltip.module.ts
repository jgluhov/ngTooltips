import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TooltipComponent,
  TooltipContainerDirective
} from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  entryComponents: [
    TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    TooltipComponent,
    TooltipDirective,
    TooltipContainerDirective
  ],
  exports: [
    TooltipDirective
  ]
})
export class TooltipModule { }
