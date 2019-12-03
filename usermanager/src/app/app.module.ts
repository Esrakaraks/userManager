import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataServicesService} from './core/userdata/services/data-services.service';
import { FormComponent } from './views/form/form.component';
import { ListComponent } from './views/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
