import { Component } from '@angular/core';
import { ClientesComponent } from '../clientes.component/clientes.component';
import { VentasComponent } from '../ventas.component/ventas.component';
import { ProductosComponent } from '../productos.component/productos.component';
import { CategoriasComponent } from '../categorias.component/categorias.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio.component',
  imports: [ClientesComponent, VentasComponent, ProductosComponent, RouterModule, CategoriasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent { }
