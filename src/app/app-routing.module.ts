import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './feature/home/home.component';
import { AdminPanelComponent } from './component/admin-panel/admin-panel.component';

const routes: Routes = [

  {
    path: '', component: AdminPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
