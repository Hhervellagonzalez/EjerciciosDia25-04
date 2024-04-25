import { Component, OnInit } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { ProductosService } from '../_servicio/productos.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListarProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productosService.obtenerTodos()
    .subscribe(data => this.productos = data);
  }
}
