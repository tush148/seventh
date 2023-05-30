import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedComponent } from './featured/featured.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:FeaturedComponent,
    path:'featured'
  },
  {
    component:StoreComponent,
    path:'store'
  },
  {
    component:AboutComponent,
    path:'about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
