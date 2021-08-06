import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/auth/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.registerUser();
  }

  registerUser() {
    this.registerService.registerUser('testUser')
      .subscribe((data: any) => localStorage.setItem('token', data));
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
