import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteConsultaComponent } from './Hotel_Neruda/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './Hotel_Neruda/cliente-registro/cliente-registro.component';
import { EmpleadoRegistroComponent } from './Hotel_Neruda/empleado-registro/empleado-registro.component';
import { EmpleadoConsultaComponent } from './Hotel_Neruda/empleado-consulta/empleado-consulta.component';
import { HabitacionConsultaComponent } from './Hotel_Neruda/habitacion-consulta/habitacion-consulta.component';
import { HabitacionRegistroComponent } from './Hotel_Neruda/habitacion-registro/habitacion-registro.component';

const routes: Routes = [
  {
    path: 'clienteConsulta',
    component: ClienteConsultaComponent
  },
  {
    path: 'clienteRegistro',
    component: ClienteRegistroComponent
  },
  {
    path: 'empleadoRegistro',
    component: EmpleadoRegistroComponent
  }
  ,
  {
    path: 'empleadoConsulta',
    component: EmpleadoConsultaComponent
  }
  ,
  {
    path: 'habitacionConsulta',
    component: HabitacionConsultaComponent
  }
  ,
  {
    path: 'habitacionRegistro',
    component: HabitacionRegistroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
