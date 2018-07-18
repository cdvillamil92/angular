import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url:string = 'http://admin.banrepcultural.org/api/actividades';

  constructor( private http:HttpClient ) { }


  getMatchesWin( ano:number ){
  	return this.http.get(this.url)
  }
}
