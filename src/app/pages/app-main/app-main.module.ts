// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AppMainComponent } from './app-main.component';
import { AppMainrouteRoutes } from './appMainroute.routing';
import { ActivatedRoute } from '@angular/router';

@NgModule({
    imports: [
      AppMainrouteRoutes
    ],
    declarations: [
        AppMainComponent,
    ],
    exports: [
        AppMainComponent,

    ]
})
export class AppMainModule {




}
