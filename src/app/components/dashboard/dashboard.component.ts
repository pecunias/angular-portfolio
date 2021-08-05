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
  public breakpoint: number = 0;
  public MAX_WIDTH_SCREEN: number = 600;


  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.breakpoint = this.generateBreakPoint(window.innerWidth, this.MAX_WIDTH_SCREEN);
    this.generatePositions();
  }

  onResize(event: any) {
    this.breakpoint = this.generateBreakPoint(event.target.innerWidth, this.MAX_WIDTH_SCREEN);
  }

  // based on original onResize and breakpoint in ngOnInit
  generateBreakPoint(innerWidth: number, maxWidth: number): number {
    return (innerWidth <= maxWidth) ? 1 : 2
  } 

  generatePositions() {
    this.portfolioService.getPortfolio().then((positions) => {
      this.positions = positions;
    });
  }
}
