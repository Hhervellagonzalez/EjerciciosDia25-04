import { Component } from '@angular/core';
import { ProductosService } from '../_servicio/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-producto.component.html',
  styleUrl: './eliminar-producto.component.css'
})
export class EliminarProductoComponent {
  constructor(private productosService: ProductosService) { }

  Delete(id : number): void {
    this.productosService.eliminarProducto(id).subscribe();
    console.log("Producto con id " + id + " a sido eliminado")
  }
}
