import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators  } from '@angular/forms';
import{ AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _Router:Router ) { }
  error:string="";

registerForm:FormGroup=new FormGroup({
  first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  age:new FormControl(null,[Validators.required,Validators.min(10),Validators.max(80)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]/)])
})

submitForm(registerForm:FormGroup){
  if(registerForm.valid){
 this._AuthService.register(registerForm.value).subscribe( (response)=>{
  if(response.message==='success'){
    this._Router.navigate(['/login']);
  }else{ 
    this.error=response.message;
  }
 })
}
}

  // flag:boolean=false;
  // registerForm!:FormGroup
  // getRegisterInfo(registerForm:any)

  // { 
  //   console.log(registerForm.value);
    
  //   if(registerForm.valid==true)
  //   {
  //      this._AuthService.register(registerForm.value).subscribe((data)=>{
  //       //  console.log(data);
  //      if(data.success===true)
  //      {
  //        this._Router.navigate(['/login'])
  //       }else
  //      {
  //        this.flag=true;
  //      }
  //    })
  //   } 
  // }
  ngOnInit(): void {
    // this.registerForm=new FormGroup({
    //   'first_name':new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    //   'last_name':new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    //   'age':new FormControl(null, [Validators.required, Validators.min(10),Validators.max(80)]),
    //   'email':new FormControl(null,[Validators.required,Validators.email]),
    //   'password':new FormControl(null,[Validators.pattern(/^[A-Z]/),Validators.required])
    // }) ;
  }

}
