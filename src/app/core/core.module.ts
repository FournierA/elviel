import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateComponent } from './template/template.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, TemplateComponent, NavigationComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
