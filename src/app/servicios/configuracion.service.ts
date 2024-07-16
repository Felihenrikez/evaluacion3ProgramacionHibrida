import { Injectable } from '@angular/core';
import { Preferences

 } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private readonly KEY_ORDENAR ="ordenar"
  constructor() { }

   async deboOrdenar():Promise<boolean>{
    const resultado =await Preferences.get({key: this.KEY_ORDENAR})
    return resultado?.value =="true" ?? false
   }

   async serDeboOrdenar(deboOrdenar:boolean):Promise<void>{
    await Preferences.set({
      key: this.KEY_ORDENAR,
      value: deboOrdenar ? "true": "false"
    })
   }

}