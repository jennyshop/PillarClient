import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  submitted = false;

  user = this.fb.group({
      email: ['', [Validators.required]],
      username: ['', [Validators.required]]
      
    });

  get f() { return this.user.controls; }

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
