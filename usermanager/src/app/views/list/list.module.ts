import { ListComponent } from './list.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ListComponent,
        children: [
          {
            path: "",
            loadChildren: () => import("../list/list.component").then(m => m.ListComponent)
          },
          {
            path: "form",
            loadChildren: () =>
              import("../form/form.component").then(m => m.FormComponent)
          },
         

        ]
      }
    ])
  ],
  providers: [],
  declarations: [
    ListComponent
    
  ]
})
export class ListModule {
}
