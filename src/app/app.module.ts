import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms'
import { HttpModule  }  from '@angular/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule,MatCheckbox} from '@angular/material/checkbox';
import {MatCardModule,MatCard} from '@angular/material/card'
import {MatInputModule,MatInput} from '@angular/material/input';
import {  MatStepperModule} from '@angular/material';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
//import {MatInputModule} from '@angular/material/input'
import { AppRoutingModule,routingComponets } from '../app/app-routing/app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { RoomiesComponent } from './components/roomies/roomies.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpServicesService } from './http-services.service'
@NgModule({
  declarations: [
    AppComponent,
    routingComponets,
    NavbarComponent,
    RoomiesComponent,
   
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,BrowserAnimationsModule,MatCheckboxModule,MatCardModule,MatInputModule,MatFormFieldModule,MatButtonModule,MatIconModule
    ,AgGridModule.withComponents([]),ReactiveFormsModule,HttpModule,  MatStepperModule
  ],
  providers: [MatCheckbox,MatCard,MatInput,HttpServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
