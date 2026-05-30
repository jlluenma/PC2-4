import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../Models/Producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  http = inject(HttpClient);
  url = "http://localhost:3000/productos"
}
