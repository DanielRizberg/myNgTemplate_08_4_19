import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main.component';

const routes: Routes = [
  {
    path:'default' ,component:AppMainComponent,data:{id:1}
   },
   {path:'',redirectTo:'default',pathMatch:'full',data:{id:1}}
];

export const AppMainrouteRoutes = RouterModule.forChild(routes);
