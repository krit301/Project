import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class RevokeService{
    url = "https://prod-68.eastus.logic.azure.com:443/workflows/71d4f428c32a411a81611c0fc9b2bcdb/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=G36iuCmKgMM_u-byRl0_izwvKHLd-VtUEwAPLGy8gYM";
    headers = new HttpHeaders({});
    constructor(private httpClient :HttpClient){
    }
    public revokeAccess(data:any):Observable<any>{
        return this.httpClient.post(this.url,data,{headers:this.headers});
    }
}