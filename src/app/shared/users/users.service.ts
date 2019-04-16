import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public API = 'http://localhost:8080';
  public EMP_API = this.API + '/user';
  public usuarios: any = {};
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.EMP_API + '/mostrar');
  }

  /*get(id: string) {
    return this.http.get(this.EMP_API + '/' + id);
  }*/
  save(usuario: any): Observable<any> {
    let result: Observable<Object>;
    if (usuario.id){
      /*result = this.http.get(this.EMP_API + '/update?id='+empresa.id+'&nombre=' + empresa.name);*/
    } else result = this.http.get(this.EMP_API + '/crear?nombre=' + usuario.nombre+'&apellidos='+usuario.apellidos+'&contraseña='+usuario.contraseña+'&email='+usuario.email);
    

    

    /* console.log(this.usuarios);
    for (let a of this.usuarios) {
      console.log(a);
      if (a.nombre == usuario.nombre && a.apellidos == usuario.apellidos && a.email == usuario.email){

        if (usuario.empresaid){
          console.log(this.API + '/useremp/crear?idempresa='+usuario.empresaid+'&idusuario='+a.id);
          result = this.http.get(this.API + '/useremp/crear?idempresa='+usuario.empresaid+'&idusuario='+a.id);
        }
      }
  } */
  
    return result;
  }

  get(id: string) {
    return this.http.get(this.EMP_API + '/' + id);
  }

  remove(id: string) {
    return this.http.get(this.EMP_API + '/del?id='+id);
  }

 /*  prueba(){
     this.getAll().subscribe(data => {
      this.usuarios = data;
    })
  } */
}
