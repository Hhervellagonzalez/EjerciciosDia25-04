import { Routes } from '@angular/router';
import { ListarProductosComponent } from './lista-productos/lista-productos.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';

export const routes: Routes = [
    { 
        path: 'productos', 
        children: [
          { path: '', component: ListarProductosComponent }, 
          { path: 'alta', component: AltaProductoComponent },
          { path: 'eliminar', component: EliminarProductoComponent } 
        ]
      },
];
