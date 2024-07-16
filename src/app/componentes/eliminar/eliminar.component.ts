import { Component, OnInit, Input } from '@angular/core';
import { IonInput, IonItem, IonButton, IonLabel, IonContent, IonIcon } from "@ionic/angular/standalone";
import {addIcons} from 'ionicons';
import { add, trash } from 'ionicons/icons';
import { Viaje } from 'src/app/modelo/viaje';
import { SqliteServicioService } from 'src/app/servicios/sqlite-servicio.service';
@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss'],
  standalone: true,
  imports:[IonIcon, IonInput, IonItem, IonButton, IonLabel, IonContent]
})
export class EliminarComponent  implements OnInit {


  @Input() viaje!:Viaje
  constructor(
    private sqlService:SqliteServicioService
  ) {
    addIcons({
      trash
    })
   }

  ngOnInit() {}
  
  async onDeleteViaje(id:number){
    await this.sqlService.deleteViaje(id)
    
  }

  async deleteClick(id:number| undefined) {
    if(id!== undefined){
       await this.onDeleteViaje(id)
    }
    

    ;
    }
}
