import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,FormArray  } from '@angular/forms';
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
  items: FormArray;
  constructor(private fb:FormBuilder,private httpService:HttpServicesService) {

    this.createRoomieForm=this.fb.group({
      'name': [''],
      'email': [''],
      'password': [''],
      'con_pwd': [''],
      'mobile_no':['']
    })

    this.secondFormGroup = this.fb.group({
  
      items: this.fb.array([ this.createItem() ])
  
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
  
  }
  
  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      email: '',
      mobile_no: ''
    });
  }

  addItem():void{
    this.items = this.secondFormGroup.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  deleteRoomieForm(index) {
        this.items.removeAt(index) 
  }

  submitRoomie(){
    console.log(this.secondFormGroup.value)
  }
  createRoomie(){
    /* this.httpService.post('localhost:8080/createRoomie',this.createRoomieForm.value).subscribe(res=>{
      console.log(res);
    }) */
  
  }

}