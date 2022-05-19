import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cadastrando: boolean=false;

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
    this.router.navigate(['/categorias']);
    this.cadastrando=false;
  }
  
  preparaCadastro(event: any) {
    event.preventDefault();
    this.cadastrando=true;
  }

  cancelaCadastro() {
    this.cadastrando=false;
  }
}
