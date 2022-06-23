import { Component } from '@angular/core';
import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from '../services/domain/cliente.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage{

  cliente: ClienteDTO;

  constructor( public storage: StorageService, public clienteService: ClienteService) { }

  ionViewWillEnter() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email)
        .subscribe(response => {
          this.cliente = response;
        },
        error => {});
    }
  }

}
