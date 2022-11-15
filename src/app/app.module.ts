import { registerLocaleData } from '@angular/common'
import localePT from '@angular/common/locales/pt'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ContainerComponent } from './components/container/container.component';
import { ClientOptionComponent } from './components/client-option/client-option.component';
import { ClientCardComponent } from './components/client-option/client-card/client-card.component';
import { PricesComponent } from './components/prices/prices.component';
import { PriceTableComponent } from './components/prices/price-table/price-table.component';
import { WriteToUsComponent } from './components/write-to-us/write-to-us.component';
import { AskedQuestionsComponent } from './components/asked-questions/asked-questions.component';
registerLocaleData(localePT)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PresentationComponent,
    ContainerComponent,
    ClientOptionComponent,
    ClientCardComponent,
    PricesComponent,
    PriceTableComponent,
    WriteToUsComponent,
    AskedQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
