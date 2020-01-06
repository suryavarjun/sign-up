import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  fname:string='';
  lname:string='';
  password='';
  public todo : FormGroup;

  constructor() {}

  ngOnInit() {
  }
  
  doSubmit(){
    this.fname = '';
    this.lname = '';
    this.password = '';

  }

  doSignUp(){
    if(this.fname == '' || this.lname == '' || this.password == '')
    {
      alert('Fill All Details');
    }else{
      alert('Sucessfully SignUp');
    }
  }
}
