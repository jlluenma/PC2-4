import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../../Models/Venta.model';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  http = inject(HttpClient);
  url = "http://localhost:3000/ventas"

  getVentas() {
    return this.http.get<Venta[]>(this.url);
  }
}
