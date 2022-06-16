import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =
[
  {path:"", redirectTo:"register", pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"about",canActivate:[AuthGuard],component:AboutComponent},
  {path:"movies",canActivate:[AuthGuard],component:MoviesComponent},
  {path:"network",canActivate:[AuthGuard],component:NetworkComponent},
  {path:"tv",canActivate:[AuthGuard],component:TvComponent},
  {path:"people",canActivate:[AuthGuard],component:PeopleComponent},
  {path:"movieDetails/:type/:id",component:MoviesDetailsComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],

exports: [RouterModule]
})
export class AppRoutingModule { }
