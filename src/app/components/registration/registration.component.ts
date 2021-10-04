import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  private submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.submitted = false;
    this.registerForm = this.formBuilder.group({
      id: [],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log("999999")
    this.userService.registerUser(this.registerForm.value).subscribe(data => {
      console.log("---", data)
      this.submitted = true;
      console.log("---", data)
      this.router.navigate(['login'])
    })
  }

}
