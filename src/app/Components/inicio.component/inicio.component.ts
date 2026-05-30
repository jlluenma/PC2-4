import { Component } from '@angular/core';
import { ClientesComponent } from '../clientes.component/clientes.component';
import { VentasComponent } from '../ventas.component/ventas.component';
import { ProductosComponent } from '../productos.component/productos.component';

@Component({
  selector: 'app-inicio.component',
  imports: [ClientesComponent, VentasComponent, ProductosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent { }
