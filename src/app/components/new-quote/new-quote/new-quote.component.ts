import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog/dialog.component';

import { ISymbol } from 'src/app/models/symbol.model';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.scss']
})
export class NewQuoteComponent implements OnInit {
  symbol: string = '';
  amount: number = 0;
  constructor(public dialog: MatDialog, private portfolioService: PortfolioService, private dashboardComponent: DashboardComponent) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {symbol: this.symbol, amount: this.amount}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.symbol = result.symbol;
      this.amount = result.amount;
      this.portfolioService.addToPortfolio({symbol: this.symbol, amount: this.amount}).then(() => {
        this.dashboardComponent.generatePositions();
      });
    });
  }

}
