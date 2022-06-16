import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=ec8a4b4839e5691358d736e6cfcf07d0`)
 
  }

  getItemDetails(mediaType:any,id:number)
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=ec8a4b4839e5691358d736e6cfcf07d0&language=en-US`)

  }
}
