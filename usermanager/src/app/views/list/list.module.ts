import { ListComponent } from "./list.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component:ListComponent
      }
    ])
  ],
  providers: [],
  declarations: [ListComponent]
})
export class ListModule {}
