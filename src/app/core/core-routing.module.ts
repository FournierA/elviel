import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElvielModule } from '../elviel/elviel.module';
import { TemplateComponent } from './template/template.component';


const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path: '', loadChildren: () => ElvielModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
