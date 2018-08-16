import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpServicesService } from '../../http-services.service'

@Component({
  selector: 'app-create-roomie',
  templateUrl: './create-roomie.component.html',
  styleUrls: ['./create-roomie.component.css']
})
export class CreateRoomieComponent implements OnInit {
  createRoomieForm:FormGroup;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private fb:FormBuilder,private httpService:HttpServicesService) {

    this.createRoomieForm=this.fb.group({
      'name': [''],
      'email': [''],
      'password': [''],
      'con_pwd': [''],
      'mobile_no':['']
    })


   }
   
  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      'name': [''],
      'email': [''],
      'password': [''],
      'con_pwd': [''],
      'mobile_no':['']
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }

  createRoomie(){
    /* this.httpService.post('localhost:8080/createRoomie',this.createRoomieForm.value).subscribe(res=>{
      console.log(res);
    }) */
  
  }

}
