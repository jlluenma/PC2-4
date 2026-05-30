import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VentaService } from '../../Service/ventas.service/venta.service';
import { Venta } from '../../Models/Venta.model';

@Component({
  selector: 'app-ventas.component',
  imports: [RouterModule],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css',
})
export class VentasComponent {
  ventaService = inject(VentaService);
  ventas = signal<Venta[]>([]);

  ngOnInit() {
    this.cargar();
  };

  cargar() {
    //Primero el servicio con getVentas()
  }
}

