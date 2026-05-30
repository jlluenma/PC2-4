import { Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio.component/inicio.component';
import { ClientesComponent } from './Components/clientes.component/clientes.component';
import { CategoriasComponent } from './Components/categorias.component/categorias.component';
import { ProductosComponent } from './Components/productos.component/productos.component';
import { VentasComponent } from './Components/ventas.component/ventas.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'ventas', component: VentasComponent }
];
