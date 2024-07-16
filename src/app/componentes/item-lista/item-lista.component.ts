import { Component, OnInit,Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonIcon, IonButton, IonButtons, IonHeader, IonModal, IonInput, IonContent, IonTitle } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import {airplane, camera, trash,cashOutline} from 'ionicons/icons';
import { EditarPrecioComponent } from '../editar-precio/editar-precio.component';
import { EliminarComponent } from "../eliminar/eliminar.component";
import { Viaje } from 'src/app/modelo/viaje';
import { SqliteServicioService } from 'src/app/servicios/sqlite-servicio.service';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonItem, IonThumbnail, IonLabel, IonIcon, IonButton, IonButtons, IonModal, IonHeader, IonTitle, EditarPrecioComponent, IonContent, EliminarComponent],
})
export class ItemListaComponent  implements OnInit {
  
  @Input()  viaje!: Viaje;
  isModalPriceOpen: boolean = false;
  isModalDeleteOpen:boolean = false;


  constructor(
     private sqlService: SqliteServicioService
  ) {
    addIcons({
      airplane,
      camera,
      trash,
      cashOutline
    })
    
   }

  ngOnInit() {
    
  }


setModalPriceOpen(abierto:boolean){
  this.isModalPriceOpen = abierto
}

setModalDeleteOpen(abierto:boolean){
  this.isModalDeleteOpen =abierto;
}


abrirModalPrecio() {
  this.setModalPriceOpen(true);
  }

abrirModalDelete() { 
  this.setModalDeleteOpen(true);
  }

 

 
  
  async onUpDateUrl(id:number,url:string){
    await this.sqlService.updateUrl(id,url)
  }


}
