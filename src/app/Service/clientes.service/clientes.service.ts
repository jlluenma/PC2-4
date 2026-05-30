import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../Models/Cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  http = inject(HttpClient);
  url = "http://localHost:3000/clientes"

  getClientes() {
    return this.http.get<Cliente[]>(this.url);
  }
}
