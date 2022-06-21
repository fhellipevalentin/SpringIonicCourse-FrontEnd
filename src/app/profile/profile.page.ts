import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage{

  email: string;

  constructor( public storage: StorageService) { }

  ionViewWillEnter(): void {
    let LocalUser = this.storage.getLocalUser();
    if (LocalUser && LocalUser.email) {
      this.email = LocalUser.email;
    }
  }

}
