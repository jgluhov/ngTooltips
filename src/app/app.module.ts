import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  TooltipComponent,
  TooltipDirective,
  TooltipContainerDirective
} from './components/tooltip';


@NgModule({
  entryComponents: [
    TooltipComponent
  ],
  declarations: [
    AppComponent,
    TooltipComponent,
    TooltipDirective,
    TooltipContainerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
