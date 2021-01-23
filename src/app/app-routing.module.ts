import { NgModule } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {path:'',component:ParentComponent},
  {path: 'go/child',component:ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
