import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog/dialog.component';

import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.scss']
})
export class NewQuoteComponent {
  symbol: string = '';
  amount: number = 0;
  constructor(public dialog: MatDialog, private portfolioService: PortfolioService, private dashboardComponent: DashboardComponent) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {symbol: this.symbol, amount: this.amount}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.symbol && result.amount >= 1) {
        this.symbol = result.symbol;
        this.amount = result.amount;
        this.portfolioService.addToPortfolio({symbol: this.symbol, amount: this.amount, id: uuid(), changed: 'neutral'}).then(() => {
          this.dashboardComponent.generatePositions();
        });
      }
    });
  }

}
