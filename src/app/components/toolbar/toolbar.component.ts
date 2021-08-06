import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private routingService: RoutingService) { }
  
  goToProfile() {
    this.routingService.navigateTo('profile');
  }

  goToDashboard() {
    this.routingService.navigateTo('portfolio');
  }
}
