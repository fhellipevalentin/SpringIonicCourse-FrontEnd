import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CredenciaisDTO } from '../services/domain/credenciais.dto';

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

  constructor(public menu: MenuController, private router: Router) { }
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
    console.log(this.creds);
    
    this.router.navigate(['/categorias']);
  }
  
  preparaCadastro(event: any) {
    event.preventDefault();
    this.cadastrando=true;
  }

  cancelaCadastro() {
    this.cadastrando=false;
  }
}
