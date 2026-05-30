import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VentaService } from '../../Service/ventas.service/venta.service';
import { Venta } from '../../Models/Venta.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ventas.component',
  imports: [RouterModule, JsonPipe],
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
    this.ventaService.getVentas().subscribe(data => this.ventas.set(data));
  }
}

