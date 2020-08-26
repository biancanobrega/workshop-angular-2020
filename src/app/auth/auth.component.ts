import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  teste = 'Teste';
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.errorMessage = '';
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  isFieldInvalid(field: string) {
    return (
      !this.loginForm.get(field).valid && this.loginForm.get(field).touched
    );
  }

  onSubmit() {
    this.errorMessage = '';
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const pass = this.loginForm.get('pass').value;

      if (email === 'teste@teste.com' && pass === '123') {
        this.router.navigateByUrl('comics');
      } else {
        this.errorMessage = 'Email and/or password is invalid(s).';
      }
    }
  }
}
