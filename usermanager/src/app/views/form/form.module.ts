import { FormComponent } from "./form.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: FormComponent
      }
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  declarations: [FormComponent]
})
export class FormModule {}
