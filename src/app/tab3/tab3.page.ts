import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  [x: string]: any;
userName:string='';
password='';


// public todo : FormGroup;
  constructor(private router:Router,private route:ActivatedRoute) {}

  doSignIn(){
   if(this.userName =='' || this.password =='')
    {
alert("Enter Details");
    } else {
      alert('Sign In SucessFully');
      console.log("Name = " + this.userName);
      console.log("Password = " + this.password);
    }
  }
  doSignUp(){
    this.router.navigateByUrl('tabs/tab3/sign-up');
    //this.router.navigate(['sign-up']);
  }
}
    //this.router.navigate(['tabs/tab3/sign-up']);
    //this.router.navigateByUrl('/sign-up');
    //this.router.navigate(['sign-up'],{relativeTo:this.route})
  // }




