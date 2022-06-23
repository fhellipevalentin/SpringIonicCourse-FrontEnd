import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClienteDTO } from "src/models/cliente.dto";
import { environment } from "src/environments/environment";
import { StorageService } from "../storage.service";

@Injectable()
export class ClienteService {
    
    baseURL: string = environment.apiURLBase;

    constructor(public http: HttpClient, public storage: StorageService) {
    }
  
    findByEmail(email: string) : Observable<ClienteDTO> {

        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});      
      
        return this.http.get<ClienteDTO>(
            `${environment.apiURLBase}/clientes/email?value=${email}`,
            {'headers': authHeader});
    }

}