import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  input = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onInputChange(e): void {
    this.input = e.target.value;
  }
  onLogin(): void {
    if (this.input) {
      localStorage.setItem('haus-adminToken', this.input);
      this.authService.login();
    }
  }
}
