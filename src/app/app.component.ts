import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarProductosComponent } from './lista-productos/lista-productos.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListarProductosComponent,AltaProductoComponent,EliminarProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjerciciosDia25-04';
}
