import { Component, OnInit,Input} from '@angular/core';
import { IonModal, IonHeader, IonList, IonItem, IonCardContent, IonButton, IonIcon, IonLabel,IonThumbnail, IonButtons } from "@ionic/angular/standalone";
import { Viaje } from 'src/app/modelo/viaje';
import { Feature } from 'src/app/ws/interfaz';
import { ViajesdbService } from 'src/app/servicios/viajesdb.service';

@Component({
  selector: 'app-item-busqueda',
  templateUrl: './item-busqueda.component.html',
  styleUrls: ['./item-busqueda.component.scss'],
  standalone: true,
  imports:[IonModal, IonHeader, IonList, IonItem, IonCardContent, IonButton, IonIcon, IonLabel,IonThumbnail]
})
export class ItemBusquedaComponent  implements OnInit {
  @Input() viaje!:Viaje
  constructor(
    private servicio: ViajesdbService
  ) { }

  ngOnInit(
    
  ) {}

}
