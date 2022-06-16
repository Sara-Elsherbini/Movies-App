import { Component, OnInit } from '@angular/core';
import {AuthService}from '../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean=false;

  constructor(private _AuthService:AuthService) { 
    _AuthService.currentUserData.subscribe(()=>{

      if(_AuthService.currentUserData.getValue() ==null){
        this.isLogin=false;
      }else{
        this.isLogin=true;
      }
    })
      

      // _AuthService.currentUser.subscribe((data)=>{
      //   if(data !=null)
      //   {
      //     this.isLogin=true;
      //   }else
      //   {
      //     this.isLogin=false;
      //   }
      // })

  }
  logOut()
  {
    this._AuthService.logOut();

  }

  ngOnInit(): void {
  }

}
