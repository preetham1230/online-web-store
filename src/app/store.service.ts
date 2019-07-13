import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

  import { share } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class Storeservice{

  private BASE_URL ='https://reqres.in';
  private GetCategoriesData = './assets/categories.json';
  private GetStoreData='./assets/stores.json';

  constructor(
    private _http: HttpClient
  ) { 

  }

  getCategories() : Observable<any> {
    return this._http
        .get<any>(this.GetCategoriesData, { responseType: 'json' })
        .pipe(share());
  } 
  getStore() : Observable<any> {
    return this._http
        .get<any>(this.GetStoreData, { responseType: 'json' })
        .pipe(share());

  }
} 
