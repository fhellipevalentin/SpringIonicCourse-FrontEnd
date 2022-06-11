import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaDTO } from 'src/models/categoria.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseURL: string = environment.apiURLBase; 

  constructor( public http: HttpClient) { 
  }
    findAll() : Observable<CategoriaDTO[]> {
      return this.http.get<CategoriaDTO[]>(`${this.baseURL}/categorias`);  
    }
  
  }