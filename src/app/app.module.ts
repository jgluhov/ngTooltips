import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TooltipModule } from './modules/tooltip/tooltip.module';
import { TestComponent } from './components/test.component';

@NgModule({
  entryComponents: [
    TestComponent
  ],
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
