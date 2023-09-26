import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class RevokeService{
    url = "https://prod-48.eastus.logic.azure.com:443/workflows/505cd5a10eea45c180265d988ab670d8/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=KjvdO1_7V3HBssQQZzVFvpTJ9hipQWb3b9vWRkPWag8";
    headers = new HttpHeaders({});
    constructor(private httpClient :HttpClient){
    }
    public revokeAccess(data:any):Observable<any>{
        return this.httpClient.post(this.url,data,{headers:this.headers});
    }
}