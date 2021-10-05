import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  // we usually catch redirects first....
  {path: '',   redirectTo: '/about', pathMatch: 'full' }, 
  // then other paths
  { path: 'about',   component: AboutComponent },
  { path: 'info',    component: InfoComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'contact', component: ContactComponent },
  // NB only implement a catch-all when the others are working!!!
  { path: '**', component: AboutComponent } // catch everything else
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
