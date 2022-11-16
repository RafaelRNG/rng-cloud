import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ViewsModule { }
