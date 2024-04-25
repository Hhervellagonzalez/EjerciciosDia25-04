import { Component } from '@angular/core';
import { ProductosService } from '../_servicio/productos.service';
import { Producto } from '../_modelo/Producto';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent {
  nuevoProducto = new Producto(0, '', 0, 0, '', 0, 0, 0, 0, 0);

  constructor(private productosService: ProductosService) { }

  agregarProducto(): void {
    this.productosService.añadirProductos(this.nuevoProducto).subscribe();
    this.nuevoProducto = new Producto(0, '', 0, 0, '', 0, 0, 0, 0, 0); 
  }
}
