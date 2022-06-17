import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CredenciaisDTO } from "./domain/credenciais.dto";
import { environment } from "src/environments/environment";
import { LocalUser } from "./domain/local_user";
import { StorageService } from "./storage.service";


@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${environment.apiURLBase}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfullLogin(authorizationValue: string) {
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok
        };
        this.storage.setLocalUser(user);
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}