import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import {MoviesService}from '../services/movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  type:any;
  id:any;
  moviesDetails:any;
  imgPrefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService)
  { 

   this.type= _ActivatedRoute.snapshot.paramMap.get('type');
   this.id= _ActivatedRoute.snapshot.paramMap.get('id')
  _MoviesService.getItemDetails(this.type , this.id).subscribe((data)=>{
    this.moviesDetails=data; 


  })

  }

  ngOnInit(): void {
  }

}
