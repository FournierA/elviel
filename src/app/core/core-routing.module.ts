import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElvielModule } from '../elviel/elviel.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => ElvielModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
