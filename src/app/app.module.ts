import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FairDashboardComponent } from './shared/components/fair-dashboard/fair-dashboard.component';
import { FairCardsComponent } from './shared/components/fair-cards/fair-cards.component';
import { FairDetailsComponent } from './shared/components/fair-details/fair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDashboardComponent,
    FairCardsComponent,
    FairDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
