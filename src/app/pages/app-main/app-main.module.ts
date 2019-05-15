// Angular Imports
import { NgModule } from "@angular/core";

// This Module's Components
import { AppMainComponent } from "./app-main.component";
import { AppMainrouteRoutes } from "./appMainroute.routing";
import { QuillModule } from "ngx-quill";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [AppMainrouteRoutes, QuillModule, FormsModule],
  declarations: [AppMainComponent],
  exports: [AppMainComponent]
})
export class AppMainModule {}
