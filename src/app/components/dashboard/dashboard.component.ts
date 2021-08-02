import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes/quotes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // TODO: create model
  // public data = [{
  //   latestPrice: 1,
  //   quoteSymbol: 'Unknown'
  // }];
  public data = [] as any;

  public quotes = [
    { symbol: 'IBM', amount: 2 }, 
    { symbol: 'AAPL', amount: 3 }
  ];

  constructor(
    private quotesService: QuotesService
  ) { }

  ngOnInit(): void {
    this.generateData();
  }

  generateData() {   
    this.quotes.forEach((entry) => {
      this.quotesService.getQuote(entry.symbol).subscribe((data) => {
        this.data.push({
          latestPrice: this.quotesService.getLatestClosePrice(data),
          quoteSymbol: entry.symbol,
          amount: entry.amount
        });
      })
    })
  }
}
