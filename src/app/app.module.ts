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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PresentationComponent,
    ContainerComponent,
    ClientOptionComponent,
    ClientCardComponent
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
