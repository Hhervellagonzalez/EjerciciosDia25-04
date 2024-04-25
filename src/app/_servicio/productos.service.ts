import { Injectable } from '@angular/core';
import { entorno } from '../_entorno/entorno';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../_modelo/Producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url: string = `${entorno.HOST}/productos`;
  private productosLista: Producto[] = [];
  productoCambio = new Subject<Producto[]>();
  mensajeCambio = new Subject<string>();


  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }
  añadirProductos(producto: Producto): Observable<Producto> {
    console.log(producto)
    return this.http.post<Producto>(this.url, producto);
  }
  eliminarProducto(id: number): Observable<any> {
    const urlEliminar = `${this.url}/${id}`;
    return this.http.delete(urlEliminar);
  }
}
