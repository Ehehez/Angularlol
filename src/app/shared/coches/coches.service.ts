import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  public API = 'http://localhost:8080';
  public EMP_API = this.API + '/coches';
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.EMP_API + '/mostrar');
  }

  get(id: string) {
    return this.http.get(this.EMP_API + '/' + id);
  }
  save(coche: any): Observable<any> {
    let result: Observable<Object>;
    
    result = this.http.get(this.EMP_API + '/crear?marca=' + coche.marca+'&modelo='+coche.modelo+'&color='+coche.color+'&idempresa='+coche.empresa);
    
    return result;
  }
  update(coche: any): Observable<any> {
    let result: Observable<Object>;
    
    result = this.http.get(this.EMP_API + '/update?id='+coche.id+'&marca=' + coche.marca+'&modelo='+coche.modelo+'&color='+coche.color);
    
    return result;
  }

  remove(id: string) {
    return this.http.get(this.EMP_API + '/del?id='+id);
  }
}
