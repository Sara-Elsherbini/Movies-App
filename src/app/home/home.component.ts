import { Component, OnInit } from '@angular/core';
import{MoviesService} from '../services/movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies!:any[];
  trendingTv!:any[];
  imgPrefix:string='https://image.tmdb.org/t/p/w500';


  constructor(private _MoviesService:MoviesService) {
    this._MoviesService.getTrending('movie').subscribe((data)=>{ 
      //sorting with vote

      data.results.sort(function(a:any,b:any){
        return b.vote_average-a.vote_average;

      })

      this.trendingMovies=data.results.slice(0,10);

    }); 
    this._MoviesService.getTrending('tv').subscribe((data)=>{
      //sorting with vote

      data.results.sort(function(a:any,b:any){
        return b.vote_average-a.vote_average

      })
      this.trendingTv=data.results.slice(0,10);
    })
   }
  
  ngOnInit(): void {
  }

}
