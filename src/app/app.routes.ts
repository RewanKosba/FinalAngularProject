import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent , title:"home page "},
  { path: 'Login', component: LoginComponent, title: "login" },
  {path:'MovieDetails/:id',component:MoviesDetailsComponent , title: "Details"},
  {path:'Register',component:RegisterComponent , title:  "register"},
  {path:'**',component:NotfoundComponent},

];
