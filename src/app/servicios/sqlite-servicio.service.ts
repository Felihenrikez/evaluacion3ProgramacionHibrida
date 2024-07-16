import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Viaje } from '../modelo/viaje';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class SqliteServicioService {

  sqlite:SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  db! : SQLiteDBConnection;
  plataforma : string ="";
  DB_NAME: string="lista_viajes";
  DB_ENCRIPTADA: boolean = false;
  DB_MODE: string ="no-encryption";
  DB_VERSION: number =1;
  DB_READ_ONLY: boolean = false;
  TABLE_NAME: string = "lista_viajes"
  COL_PAIS:string ="pais"
  COL_CIUDAD:string ="ciudad"
  COL_VALOR:string = "valor"
  COL_IMAGEN_URL:string ="url"
  DB_SQL_TABLAS: string= `
  CREATE TABLE IF NOT EXISTS ${this.TABLE_NAME} (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ${this.COL_PAIS} TEXT NOT NULL,
  ${this.COL_CIUDAD} TEXT NOT NULL,
  ${this.COL_VALOR} INTEGER NOT NULL,
  ${this.COL_IMAGEN_URL} TEXT NOT NULL);
  `;

  constructor() { }

  private async _iniciarPluginWeb():Promise<void>{
    await customElements.whenDefined('jeep-sqlite')
    const jeepSqliteEl = document.querySelector("jeep-sqlite")
    if(jeepSqliteEl != null){
      await this.sqlite.initWebStore()
    }
    
  }

  async iniciarPlugin(){
    this.plataforma = Capacitor.getPlatform()
    if(this.plataforma =="web"){
      await this._iniciarPluginWeb();
    }
    await this.abrirConexion()
    await this.db.execute(this.DB_SQL_TABLAS)

    await this.addViaje({ciudad:"Pichilemu",pais:"Chile",valor:2000,url:"www"})

  }

  async abrirConexion(){
    const ret = await this.sqlite.checkConnectionsConsistency()
    const isConn = (await this.sqlite.isConnection(this.DB_NAME,this.DB_READ_ONLY)).result
    if(ret.result && isConn){
      this.db = await this.sqlite.retrieveConnection(this.DB_NAME,this.DB_READ_ONLY)
    }else{
      this.db= await this.sqlite.createConnection(
        this.DB_NAME,
        this.DB_ENCRIPTADA,
        this.DB_MODE,
        this.DB_VERSION,
        this.DB_READ_ONLY
      )
    }
    await this.db.open()

   
    
  }


  async addViaje(viaje:Viaje){
    const sql =`INSERT INTO ${this.TABLE_NAME}(${this.COL_CIUDAD},${this.COL_PAIS},${this.COL_VALOR},${this.COL_IMAGEN_URL})  values(?,?,?,?)`
    await this.db.run(sql,[viaje.ciudad,viaje.pais,viaje.valor,viaje.url])
  }
  
  
  async getViajes(): Promise<Viaje[]>{
    const sql = `SELECT * FROM ${this.TABLE_NAME}`
   const resultado = await this.db.query(sql)
   return resultado?.values??[]

  }

  async updateValor(id: number, valor: number): Promise<void> {
    const sql = `UPDATE ${this.TABLE_NAME} SET ${this.COL_VALOR} = ? WHERE id = ?`;
    await this.db.run(sql, [valor, id]);
  }
  
  async updateUrl(id: number, url: string): Promise<void> {
    const sql = `UPDATE ${this.TABLE_NAME} SET ${this.COL_IMAGEN_URL} = ? WHERE id = ?`;
    await this.db.run(sql, [url, id]);
  }

  async deleteViaje(id:number):Promise<void>{
    const sql = `DELETE FROM ${this.TABLE_NAME} WHERE id=?`;
    await this.db.run,[id];
  }



}