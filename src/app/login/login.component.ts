import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators  } from '@angular/forms';
import{ AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  // loginForm!:FormGroup ;
  // errorMessage!:string;
  // flag:boolean=false;

  constructor(private _AuthService:AuthService,private _Router:Router ) { }
  error:string="";

  loginForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]/)])
})


submitForm(loginForm:FormGroup){
  if(loginForm.valid){
 this._AuthService.login(loginForm.value).subscribe( (response)=>{
  if(response.message==='success'){
    localStorage.setItem("currentUser",response.token);
    this._AuthService.saveCurrentUserData()
    this._Router.navigate(['/home']);
   
  }else{ 
    this.error=response.message;
  }
 })
}
}


  // getLoginInfo(loginForm:any){
  //   this._AuthService.login(loginForm.value).subscribe((data)=>{
  //     console.log(data);
  //     if(data.message=='success')
  //     {
  //       this._AuthService.saveCurrentUser(data.user.first_name ,data.user.last_name,data.user.email,data.age,data.token)
  //       this._Router.navigate(['/home']);
  //     }else
  //     {
  //        this.flag=true;
  //        this.errorMessage=data.message;
  //     }

  //   })
  // }

  ngOnInit(): void {
    // this.loginForm =new FormGroup({
    //   'email':new FormControl(null,[Validators.required,Validators.email]),
    //   'password':new FormControl(null,[Validators.pattern(/^[A-Z]/),Validators.required])
    // }) ;
  }

}
