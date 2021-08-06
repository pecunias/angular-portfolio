import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/auth/register/register.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private routingService: RoutingService) { }

  message: string = 'Registering...';

  ngOnInit(): void {
    this.registerUser();
  }

  registerUser() {
    this.registerService.registerUser('testUser')
      .subscribe((data: any) => { 
        this.message = "You are now registered!";
        localStorage.setItem('token', data)
      }, (error) => {
        this.message = `Something went wrong! Check if node-authentication is running correctly! ${JSON.stringify(error.message)}`;
      });
  }

  goToProfile() {
    this.routingService.navigateTo('profile');
  }
}
