import { Component, Input, OnInit, NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon,  } from "@ionic/angular/standalone";
import { ItemListaComponent } from "../item-lista/item-lista.component";
import { Viaje } from 'src/app/modelo/viaje';
import { SqliteServicioService } from 'src/app/servicios/sqlite-servicio.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, CommonModule, IonContent, IonList, IonItem, IonLabel, ItemListaComponent]
})
export class ListaComponent  implements OnInit {
  @Input() viajes:Viaje[]=[]

  constructor(
    private  sqlService:SqliteServicioService
  ) { }

  ngOnInit() {
    if (this.viajes.length === 0) {
      console.log('El arreglo de citas está vacío. si que si ');
    } else {
      console.log('El arreglo de citas contiene elementos:', this.viajes);
    }
  }

}
