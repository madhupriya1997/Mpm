import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({ 
    email : new FormControl(null, [Validators.email, Validators.required]),
    password : new FormControl(null, Validators.required)

  });
  constructor(private _router : Router, private _userService : UserService) { }

  ngOnInit() {
  }

  movetoRegister(){
    this._router.navigate(['/register']);
  }

  login()
  {
    if(!this.loginForm.valid)
    {
      console.log("Invalid");
      return;
    }
  //console.log(JSON.stringify(this.loginForm.value));
  this._userService.login(JSON.stringify(this.loginForm.value)).subscribe(
    data => { console.log(data); this._router.navigate(['/dashboard']);},
    error => console.error(error)
  )
  }

}
