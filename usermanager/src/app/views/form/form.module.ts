import { FormComponent } from "./form.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: FormComponent
      }
    ])
  ],
  providers: [],
  declarations: [FormComponent]
})
export class FormModule {}
