import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ILoginRequest } from '../../../interfaces/login.request.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy{
  @Input() error!: string | null;
  @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  private loginSubscription!: Subscription;

constructor(private readonly _authService: AuthService,
            private router: Router) {}
  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
  
submit() {
    const loginRequest: ILoginRequest = {
      email: this.form.value.username,
      password: this.form.value.password,
    };

    this.loginSubscription = this._authService.login(loginRequest).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/home/person');
      },
      error: (error) => {
        if(error.erros.Messages)
        console.error('Erro no login', error);
      }
    });
  }
}