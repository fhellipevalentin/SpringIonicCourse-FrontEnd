import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CredenciaisDTO } from '../services/domain/credenciais.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  cadastrando: boolean=false;
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public menu: MenuController, private router: Router, public auth: AuthService) { }
  ngOnInit(): void {
  }

  ionViewWillEnter() {
    this.menu.swipeGesture(false);
  }

  ionViewDidLeave(): void {
    this.menu.swipeGesture(true);
  }

  onSubmit() {
    this.cadastrando=false;
    
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        console.log(response.headers.get('Authorization'));
        this.router.navigate(['/categorias']);
      },
      error => {})
  }
  
  preparaCadastro(event: any) {
    event.preventDefault();
    this.cadastrando=true;
  }

  cancelaCadastro() {
    this.cadastrando=false;
  }
}
