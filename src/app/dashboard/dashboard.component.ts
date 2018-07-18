import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  variable:string = 'Mi primera app en angular'
  maches:any;
  loading:boleano = true;
  messageLoad = 'Cargando...'
  ano:string = 2018;
  rounds = [];
  constructor( public dashboardService:DashboardService ) { }

  ngOnInit() {
  	this.variable = 'mi segunda app'
  	setTimeout( () => { this.getInfo() },2000 )
  }


  change():void{
  	  	this.variable = 'Mi tercera app';
  }

  load():void{
  	this.variable = 'Mi Cuara apdsadjaskldjaskld';
  }


  getInfo():void{
	this.dashboardService.getMatchesWin()
  	.subscribe(
  		data => { this.matches = data;},
  		err => { console.log(err); },
  		() => { 
  				console.log('respuesta: ',this.matches)
  				this.loading = false;

  			}
  		);
  }

}
 