import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "",
                loadChildren: () =>
                  import("../list/list.module").then(m => m.ListModule)
              },
             
           {
            path: "form",
            loadChildren: () =>
              import("../form/form.module").then(m => m.FormModule)
          }
         

        ]
      }
    ])
  ],
  providers: [],
  declarations: [
    HomeComponent
    
  ]
})
export class HomeModule {
}
