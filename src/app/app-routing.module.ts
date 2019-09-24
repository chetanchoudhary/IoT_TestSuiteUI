import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPTCSensorComponent } from './add-ptcsensor/add-ptcsensor.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'addPTCSensor', component: AddPTCSensorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
