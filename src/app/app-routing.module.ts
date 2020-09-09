import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'forside', pathMatch: 'full' },
  { path: 'forside', component: FrontpageComponent, data: { title: 'Forside' } },
  { path: 'samling', component: CollectionComponent, data: { title: 'Samling'} },
  { path: 'profil', component: ProfileComponent, data: { title: 'Profil'} },
  { path: 'login', component: LoginComponent, data: { title: 'Log ind'} },
  { path: 'registrer', component: RegisterComponent, data: { title: 'Registrer en bruger'} },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
