import { Component, Input, OnInit } from '@angular/core';
import { IPosition } from 'src/app/models/position.model';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-card-quote',
  templateUrl: './card-quote.component.html',
  styleUrls: ['./card-quote.component.scss']
})
export class CardQuoteComponent implements OnInit {
  // Create model
  @Input() data: any | IPosition
  constructor(private portfolioService: PortfolioService, private dashboardComponent: DashboardComponent) { }

  ngOnInit() {
    console.log(this.data);
  }

  deletePosition(data: IPosition) {
    this.portfolioService.removeFromPortfolio(data).then(() => {
      this.dashboardComponent.generatePositions();
    });
  }
}
