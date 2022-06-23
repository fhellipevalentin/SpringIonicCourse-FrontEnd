import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from 'src/config/storage_keys.config';
import { LocalUser } from '../../models/local_user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getLocalUser() : LocalUser{
    let usr = localStorage.getItem('localUser');
    if (usr == null) {
      return null;
    }
    else {
      return JSON.parse(usr);
    }
  }

  setLocalUser(obj: LocalUser) {
    if (obj == null) {
      localStorage.removeItem('localUser');
    }
    else {
      localStorage.setItem('localUser', JSON.stringify(obj));
    }
  }
}
