import { Component, Directive } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  currentImage: any;
  custname: string = '';
  custnumber: number =0 ;
  users=[];
  
  public todo : FormGroup;
  images = ['img5.jpg'];

  error_messages = {
    'custname' : [
      { type: 'required', message: 'Name is required.'}
    ],
    'custnumber' : [
      { type: 'required', message: 'Number is required.'}
    ],
  }

  constructor(private camera: Camera,  private formBuilder: FormBuilder,
    // public navCtrl: NavController
    ) {
    this.todo = this.formBuilder.group({
      title: ['MyForm', Validators.required],
      description: ['Testing Form'],
      customerName: new FormControl(),
      customerNumber: new FormControl()
    });
  }

  doSubmit() {
    this.custname = '';
    this.custnumber = 0;
  }

  doSuccess() {
    //  console.log(this.custname);
    //  console.log(this.custnumber);
    if(this.custname == '' || this.custnumber == 0)
    {
      alert('Please enter details'); 
    } else {
      console.log("Name = " + this.custname);
      console.log("Number = " + this.custnumber); 
    }
  }
  
  add(uname){
    this.users.push({
      name:uname.value
    }); 
  }

  sub(){
    this.users.splice(this.users.length -1)
  }
  remove(item){
    this.users.splice(item, 1)
  }
}
 
