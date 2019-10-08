import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPacientesComponent} from '../app/pacientes/add-pacientes/add-pacientes.component';
import { ListPacientesComponent } from './pacientes/list-pacientes/list-pacientes.component';
import { AddCitaComponent } from './citas/add-cita/add-cita.component';
import { AddDoctorComponent } from './empleados/doctores/add-doctor/add-doctor.component';
import { AddEnfermerasComponent } from './empleados/enfermeras/add-enfermeras/add-enfermeras.component';
import { AddFichaComponent } from './fichas/add-ficha/add-ficha.component';
import { AddPagoComponent } from './pagos/add-pago/add-pago.component';
import { AddTratamientoComponent } from './tratamientos/add-tratamiento/add-tratamiento.component';

const routes: Routes = [
  {
    path:'pacienteAdd',
    component: AddPacientesComponent
  },
  {
    path:'pacientesList',
    component:ListPacientesComponent
  },
  {
    path:'addHorarioOdontologo',
    component:AddCitaComponent
  },
  {
    path:'addDoctor',
    component:AddDoctorComponent
  },
  {
    path:'addEnfermera',
    component:AddEnfermerasComponent
  },
  {
    path:'addFichaMedica',
    component:AddFichaComponent
  },
  {
    path:'addPago',
    component:AddPagoComponent
  },
  {
    path:'addTratamiento',
    component:AddTratamientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
