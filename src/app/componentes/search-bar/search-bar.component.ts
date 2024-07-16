import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonSearchbar, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from "@ionic/angular/standalone";
import { ViajesdbService } from 'src/app/servicios/viajesdb.service';

import { Feature } from 'src/app/ws/interfaz';
import { ItemBusquedaComponent } from "../item-busqueda/item-busqueda.component";
import { Viaje } from 'src/app/modelo/viaje';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, ItemBusquedaComponent],

})
export class SearchBarComponent  implements OnInit {
   busquedaViajes:Feature[]=[]
   

  constructor(private servicio:ViajesdbService 
    
  ) { }
 
   async ngOnInit() {
  
    const res = await this.servicio.getPlaces("playa");
    console.log('datos recibidos',res);
    if (res && res.Features) {
      this.busquedaViajes = res.Features;
      console.log('Viajes asignados:', this.busquedaViajes);
    } else {
      console.log('No se recibieron características');
    }
   }
}
