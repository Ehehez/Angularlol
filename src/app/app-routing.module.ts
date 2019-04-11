import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasListComponent} from './empresas-list/empresas-list.component';
import { EmpresasEditComponent } from './empresas-edit/empresas-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'empresas-list',
    component: EmpresasListComponent
  },
  {
    path: 'empresas-add',
    component: EmpresasEditComponent
  },
  {
    path: 'empresas-edit/:id',
    component: EmpresasEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
