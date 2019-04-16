import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';
import { EmpresasEditComponent } from './empresas-edit/empresas-edit.component';
import { HomeComponent } from './home/home.component';
import { CochesListComponent } from './coches-list/coches-list.component';
import { CochesEditComponent } from './coches-edit/coches-edit.component';
import { CochesAddComponent } from './coches-add/coches-add.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UserempListComponent } from './useremp-list/useremp-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpresasListComponent,
    EmpresasEditComponent,
    HomeComponent,
    CochesListComponent,
    CochesEditComponent,
    CochesAddComponent,
    UsersListComponent,
    UsersAddComponent,
    UserempListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
  ],
  entryComponents: [
    UserempListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
