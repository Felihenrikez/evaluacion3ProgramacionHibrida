import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonTitle, IonToolbar, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

import { ViajesdbService } from 'src/app/servicios/viajesdb.service';
import {  Feature } from 'src/app/ws/interfaz';
import { SearchBarComponent } from "../../componentes/search-bar/search-bar.component";
import { ListaComponent } from "../../componentes/lista/lista.component";
import { OutletContext } from '@angular/router';
import { SqliteServicioService } from 'src/app/servicios/sqlite-servicio.service';
import { Viaje } from 'src/app/modelo/viaje';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SearchBarComponent, ListaComponent]
})
export class InicioPage implements OnInit {
  

listaViajesSQL:Viaje[]=[]
  constructor(
    
    private servicioSQLite:SqliteServicioService
  ) { }

  async ngOnInit() {
    await this.servicioSQLite.iniciarPlugin()
    await this._actualizar()

    
  }

  async _actualizar(){
    this.listaViajesSQL= await this.servicioSQLite.getViajes()
  }
  
}
