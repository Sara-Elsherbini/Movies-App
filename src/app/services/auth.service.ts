import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable,BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';
// import{userData} from '../userData';
import{Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient,private _Router:Router){
   
  }

 currentUserData=new BehaviorSubject<any>(null );

  register(registerFormValue:object):Observable<any>
  {
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',registerFormValue)
  }

  login(formData:object):Observable<any>
  {
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formData)
  }

  logOut(){
    this.currentUserData.next(null);
    localStorage.setItem("currentUser",'{}')
    this._Router.navigate(['/login']);

  }

  saveCurrentUserData()
  {
    let encodedToken:any=localStorage.getItem('currentUser');
    
     let decodedToken=jwtDecode(encodedToken);

     this.currentUserData.next(decodedToken);
    
     
  }
//    currentUser=new BehaviorSubject<any>(null);
 
//   constructor(private _HttpClient:HttpClient,private _Router:Router) {
//     if(localStorage.getItem('userData') !=null)
//     {
//       this.currentUser.next(  JSON.parse(localStorage.getItem('userData')||'{}') )
//     }
//    }
//   register(registerFormValue:object):Observable<any>
//   {
//     return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',registerFormValue)
//   }
//  login(loginFormValue:any):Observable<any>
//   {
//     return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',loginFormValue)
//   }
//   logOut()
//   {
//     this.currentUser.next(null);
//     localStorage.setItem('userData','{}');
//     this._Router.navigate(['/login'])
//   }
//   saveCurrentUser(first_name :any, last_name:any , email :any,age:any, token:any)
//   {
//     let user = new userData(first_name , last_name , email ,age, token);
//     localStorage.setItem('userData',JSON.stringify(user));
//     this.currentUser.next(user);
//     // console.log(this.currentUser)
//   }
}
 