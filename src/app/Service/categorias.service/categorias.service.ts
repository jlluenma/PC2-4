import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../../Models/Categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  http = inject(HttpClient);
  url = "http://localHost:3000/categorias"

  getCategorias() {
    return this.http.get<Categoria[]>(this.url)
  }
}
