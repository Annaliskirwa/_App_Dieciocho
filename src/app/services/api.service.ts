import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.API_ENDPOINT;

  constructor(
    private httpClient:HttpClient
  ) { }
  getAllCats():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'cats',{observe:'response'});
  }
}
