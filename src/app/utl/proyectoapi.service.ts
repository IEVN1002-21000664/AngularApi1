import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumnos } from './alumnos';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ProyectoapiService {
 
  constructor(private  http: HttpClient) { }
 
 
public getAlumnos():Observable<Alumnos[]>{
  return this.http.get<Alumnos[]>('http://127.0.0.1:5000/alumnos')
}
 
agregarNuevoAlumno(datos:Alumnos){
  return this.http.post('http://127.0.0.1:5000/alumnos',datos)
}
 
public getAlumno(mat:number):Observable<Alumnos>{
  console.log(mat)
  return this.http.get<Alumnos>('http://127.0.0.1:5000/alumnos/'+mat)
}
 
modificarAlumno(mat:number,datos:Alumnos){
  return this.http.put('http://127.0.0.1:5000/alumnos/'+mat,datos)
}
public EliminaAlumno(mat:number):Observable<Alumnos>{
  return this.http.delete<Alumnos>('http://127.0.0.1:5000/alumnos/'+mat)
}
 
}