import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public errorMsg: string | null = null;
  public isLoading = false;

  constructor(
      private fb: FormBuilder,
      private auth: AuthService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      loginInput: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMsg = 'Molimo popunite sva polja ispravno.';
      return;
    }

    this.isLoading = true;
    this.errorMsg = null;

    const { loginInput, password } = this.loginForm.value;
    console.log('Attempting login for', loginInput);

    this.auth.login(loginInput, password).subscribe({
      next: (user: User | null) => {
        this.isLoading = false;
        console.log('Login result:', user);
        if (user) {
          this.router.navigate(['/']);
        } else {
          this.errorMsg = 'Neispravno korisničko ime ili lozinka.';
        }
      },
      error: err => {
        this.isLoading = false;
        console.error('LoginComponent error:', err);
        this.errorMsg = err.error?.error || 'Došlo je do greške. Pokušajte ponovo.';
      }
    });
  }

  get loginInput() {
    return this.loginForm.get('loginInput');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
