import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,FormArray  } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  image="../../assets/images/viewlogo.png"
  constructor( private fb:FormBuilder) { }
  adminLoginGroup:FormGroup;
  roomieLoginGroup: FormGroup;
  
  ngOnInit() {
    this.adminLoginGroup = this.fb.group({
      email: [''],
      password:['']
    });
    this.roomieLoginGroup = this.fb.group({
      email: [''],
      password:['']
    });

  }

}
