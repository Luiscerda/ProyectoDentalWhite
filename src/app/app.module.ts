import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/shared/headers/headers.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ContentComponent } from './components/shared/content/content.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SettingComponent } from './components/shared/setting/setting.component';
import { AddPacientesComponent } from './pacientes/add-pacientes/add-pacientes.component';
import { ListPacientesComponent } from './pacientes/list-pacientes/list-pacientes.component';
import { AddCitaComponent } from './citas/add-cita/add-cita.component';
import { AddFichaComponent } from './fichas/add-ficha/add-ficha.component';
import { AddTratamientoComponent } from './tratamientos/add-tratamiento/add-tratamiento.component';
import { AddDoctorComponent } from './empleados/doctores/add-doctor/add-doctor.component';
import { AddEnfermerasComponent } from './empleados/enfermeras/add-enfermeras/add-enfermeras.component';
import { AddPagoComponent } from './pagos/add-pago/add-pago.component';
import { CitasAddComponent } from './citas/citas-add/citas-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent,
    AddPacientesComponent,
    ListPacientesComponent,
    AddCitaComponent,
    AddFichaComponent,
    AddTratamientoComponent,
    AddDoctorComponent,
    AddEnfermerasComponent,
    AddPagoComponent,
    CitasAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
