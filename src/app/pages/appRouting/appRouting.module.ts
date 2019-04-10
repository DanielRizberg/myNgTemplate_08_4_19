import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes:Routes=[
  {path:'main' ,loadChildren:'../app-main/app-main.module#AppMainModule'},
  {path:'',redirectTo:'main' ,pathMatch:'full'}
]

@NgModule({
  imports: [
   RouterModule.forRoot(routes,{useHash:true})
  ],
  declarations: []
  ,
  exports:[RouterModule]
})
export class AppRoutingModule { }
