import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: false
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public errorMsg: string | null = null;
  public isLoading = false;

  constructor(
      private fb: FormBuilder,
      private auth: AuthService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username:        ['', [Validators.required, Validators.minLength(3)]],
      email:           ['', [Validators.required, Validators.email]],
      password:        ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatch });
  }

  private passwordsMatch(group: AbstractControl) {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAsDirty();
      this.errorMsg = 'Molimo popunite sva polja ispravno.';
      return;
    }
    this.isLoading = true;
    const { username, email, password } = this.registerForm.value;
    this.auth.register(username, email, password).subscribe({
      next: u => {
        console.log('Registered:', u);
        this.isLoading = false;
        this.router.navigate(['/auth/login']);
      },
      error: err => {
        console.error('Registration error:', err);
        this.isLoading = false;
        this.errorMsg = 'Došlo je do greške prilikom registracije.';
      }
    });
  }

  get username()        { return this.registerForm.get('username'); }
  get email()           { return this.registerForm.get('email'); }
  get password()        { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
}
