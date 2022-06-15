import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { CategoriaService } from '../services/domain/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  bucketUrl: string = environment.bucketBase;
  items: CategoriaDTO[];

  constructor( public categoriaService: CategoriaService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.items = response;
        console.log(response)
      }, error => {})
  }
}
