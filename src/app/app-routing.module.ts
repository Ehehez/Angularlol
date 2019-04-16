import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasListComponent} from './empresas-list/empresas-list.component';
import { EmpresasEditComponent } from './empresas-edit/empresas-edit.component';
import { HomeComponent } from './home/home.component';
import { CochesListComponent } from './coches-list/coches-list.component';
import { CochesEditComponent } from './coches-edit/coches-edit.component';
import { CochesAddComponent } from './coches-add/coches-add.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UserempService } from './shared/useremp/useremp.service';
import { UserempListComponent } from './useremp-list/useremp-list.component';

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
  },
  {
    path:'coches-list',
    component: CochesListComponent
  },
  {
    path: 'coches-edit/:id',
    component: CochesEditComponent
  },
  {
    path: 'coches-add',
    component: CochesAddComponent
  },
  {
    path: 'users-list',
    component: UsersListComponent
  },
  {
    path:'users-add',
    component: UsersAddComponent
  },
  {
    path:'users-edit/:id',
    component: UsersAddComponent

  },
  {
    path:'asd',    
    component: UserempListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
