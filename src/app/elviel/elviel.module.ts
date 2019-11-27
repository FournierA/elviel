import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElvielRoutingModule } from './elviel-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    ElvielRoutingModule
  ]
})
export class ElvielModule { }
