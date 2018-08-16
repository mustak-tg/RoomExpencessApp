import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule }    from '@angular/router'
import { LoginPageComponent } from '../components/login-page/login-page.component'
import { CreateRoomieComponent } from '../components/create-roomie/create-roomie.component'
import { RoomiesComponent } from '../components/roomies/roomies.component'
const routes: Routes = [
  {path:"login", component:LoginPageComponent},
  {path: '',redirectTo: '/login', pathMatch: 'full'},
  {path:"createRoomie" , component:CreateRoomieComponent},
  {path:"roomieList",component:RoomiesComponent}
  
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponets=[
  LoginPageComponent,
  CreateRoomieComponent,
  RoomiesComponent
  
]
