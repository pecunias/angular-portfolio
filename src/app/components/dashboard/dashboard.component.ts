import { Component, OnInit } from '@angular/core';
import { IPosition } from 'src/app/models/position.model';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public positions: IPosition[] = [];

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.generatePositions();
  }

  generatePositions() {
    this.portfolioService.getPortfolio().then((positions) => {
      this.positions = positions;
    });
  }
}
