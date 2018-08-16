import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name:string;
 names:any=["mustak","baby","sanjiv","megha"]
 message:string="";
 checkName(){
   for(let i in this.names){
       var compiled=this.checkLetter(this.name)
       this.message=compiled;
      }
    
   }
   checkLetter(name){
    var formatted=name.replace("m","K")
    return formatted;
   }
   
 
}
