import { Injectable } from '@angular/core';
import {  ResultWSIdCDB,Feature, ResultWSViajes} from '../ws/interfaz';
import { Viaje } from '../modelo/viaje';
import { add } from 'ionicons/icons';

@Injectable({
  providedIn: 'root'
})
export class ViajesdbService {

  baseUrl1 : string = "http://api.opentripmap.com/0.1/en/places/autosuggest?apikey=5ae2e3f221c38a28845f05b603524a226851127b67e096ef6209df78&name="
  baseUrl2 : string = "&radius=6371000&lon=70.6506&lat=33.4372"
  
  constructor() { }


  async getViajes(token:string):Promise<Viaje[]>{
    const cdbCatResult = await this.getPlaces(token)
    const viajes: Viaje[]=[]
    cdbCatResult.Features.forEach( async feature =>{
      const id = feature.id
      const rescdbViajes = await this.getItems(id)
      const xid = rescdbViajes.Features[0].xid
      const ciudad = rescdbViajes.Features[0].name
      
      const url = rescdbViajes.Features[0].image
      const viaje = new Viaje (id,xid,ciudad,url)
      viajes.push(viaje)

      viajes.push(viaje) 
      
    })
    return viajes
  }

  async getPlaces(clave:string):Promise<ResultWSIdCDB>{
     const url =  `${this.baseUrl1}${clave}${this.baseUrl2}`
     const respuesta = await fetch(url)
     const data = await respuesta.json()
     console.log('respuesta del servicio',data)
     const filteredData: Feature[] = data.features.map((feature: any) => ({ id: feature.id }));
    return { Features: filteredData };

  }
  

  baseUrl3:string ="https://api.opentripmap.com/0.1/en/places/xid/"
  baseUrl4:string ="?apikey=5ae2e3f221c38a28845f05b603524a226851127b67e096ef6209df78"

  async getItems(id:string):Promise<ResultWSViajes>{
    const url =`${this.baseUrl3}${id}${this.baseUrl4}`
    const respuesta = await fetch(url)
    const data:ResultWSViajes = await respuesta.json()
    return data
  }
}
