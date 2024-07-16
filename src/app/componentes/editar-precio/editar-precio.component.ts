import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonButton, IonItem, IonIcon } from "@ionic/angular/standalone";
import { SqliteServicioService } from 'src/app/servicios/sqlite-servicio.service';
import { Viaje } from 'src/app/modelo/viaje';

@Component({
  selector: 'app-editar-precio',
  templateUrl: './editar-precio.component.html',
  styleUrls: ['./editar-precio.component.scss'],
  standalone: true,
  imports:[IonContent, IonInput, IonButton, IonItem, IonIcon,FormsModule]
})
export class EditarPrecioComponent  implements OnInit {
  @Input() viaje!:Viaje;
  newValor:number=0;

  constructor(
    private sqlService:SqliteServicioService
  ) { }

  ngOnInit() {}

 
  async upDateValor(){
    if(this.viaje.id !==undefined){
      
     await this.sqlService.updateValor(this.viaje.id,this.newValor)
    }
  }
}
