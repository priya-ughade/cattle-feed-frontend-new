import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AdminPanelComponent } from './component/admin-panel/admin-panel.component';

const routes: Routes = [

  { path: '', redirectTo: 'admin', pathMatch: 'full' },  // redirect root to 'admin' or some page
  { path: 'admin', component: AdminPanelComponent },     // actual admin panel route
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
