

export interface Feature{
    id:number
    
    
}
export interface  ResultWSIdCDB{
    Features:Feature[]
}
export interface CDBViajes{
    xid: string
    name:string
    address?:[country:string]
    image?:string
}
export interface ResultWSViajes{
    Features:CDBViajes[]
}
