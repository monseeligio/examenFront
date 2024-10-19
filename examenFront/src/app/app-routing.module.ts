import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';


const routes: Routes = [
  {path: '', pathMatch:'full' ,redirectTo:'Inicio'},
  {path: 'Inicio', component: InicioComponent },
  {path: 'Carousel', component: CarouselComponent },
  {path: 'Empleados', component: EmpleadosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
