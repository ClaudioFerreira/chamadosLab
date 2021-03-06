import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroChamadoComponent } from './cadastro-chamado/cadastro-chamado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PainelChamadosComponent } from './painel-chamados/painel-chamados.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroChamadoComponent,
    PainelChamadosComponent,
    DialogAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added 
    NgbModule
  ],
  exports: [
    DialogAlertComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
