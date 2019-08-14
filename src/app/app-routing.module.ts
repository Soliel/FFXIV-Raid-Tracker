import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticListingComponent } from './static-listing/static-listing.component';


const routes: Routes = [
  {path: '', component: StaticListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
