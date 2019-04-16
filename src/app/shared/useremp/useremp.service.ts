import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserempService {

  public API = 'http://localhost:8080';
  public EMP_API = this.API + '/useremp';
  useremp: any = {};
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.EMP_API + '/mostrar');
  }

  /*get(id: string) {
    return this.http.get(this.EMP_API + '/' + id);
  }*/
  save(useremp: any): Observable<any> {
    let result: Observable<Object>;
    if (useremp.id){
      /*result = this.http.get(this.EMP_API + '/update?id='+empresa.id+'&nombre=' + empresa.name);*/
    } else result = this.http.get(this.EMP_API + '/crear?idempresa=' + useremp.idempresa + '&idusuario='+ useremp.idusuario);
    
    return result;
  }


  remove(idempresa: string, idusuario: string) {
    return this.http.get(this.EMP_API + '/del?idempresa='+idempresa+'&idusuario='+idusuario);
  }
}
