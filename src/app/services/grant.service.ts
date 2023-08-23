import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class GrantService{
    url = "https://prod-26.eastus.logic.azure.com:443/workflows/c2875f662e7442c6b75e75b7b6767514/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=E7HFvYxf1qDbBz7Ho_cV87m2d2QEc9497dq4fSubT5c";
    // url = "https://test.azure.com:443/workflows/c2875f662e7442c6b75e75b7b6767514/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=E7HFvYxf1qDbBz7Ho_cV87m2d2QEc9497dq4fSubT5c";
    headers = new HttpHeaders({});
    constructor(private httpClient :HttpClient){
    }
    public addGrantAccess(data:any):Observable<any>{
        return this.httpClient.post(this.url,data,{headers:this.headers});
    }
}