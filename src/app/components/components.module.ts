import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContainerComponent } from './container/container.component';
import { ClientOptionComponent } from './client-option/client-option.component';
import { ClientCardComponent } from './client-option/client-card/client-card.component';
import { PricesComponent } from './prices/prices.component';
import { PriceTableComponent } from './prices/price-table/price-table.component';
import { WriteToUsComponent } from './write-to-us/write-to-us.component';
import { AskedQuestionsComponent } from './asked-questions/asked-questions.component';
import { AccordionItemComponent } from './asked-questions/accordion-item/accordion-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PresentationComponent,
    ContainerComponent,
    ClientOptionComponent,
    ClientCardComponent,
    PricesComponent,
    PriceTableComponent,
    WriteToUsComponent,
    AskedQuestionsComponent,
    AccordionItemComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    PresentationComponent,
    ContainerComponent,
    ClientOptionComponent,
    PricesComponent,
    WriteToUsComponent,
    AskedQuestionsComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
