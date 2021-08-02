import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes/quotes.service';
import { IQuote } from '../../models/quote.model';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public quotes: IQuote[] = []
  public data = [] as any;

  constructor(
    private quotesService: QuotesService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.generateData();
  }

  generateData() {
    this.localStorageService.getItem('portfolio').then((item) => {
      this.quotes = item !== null ? JSON.parse(item) : []
      this.data = [];

      this.quotes.forEach((entry: IQuote) => {
        this.quotesService.getQuote(entry.symbol).subscribe((data) => {
          this.data.push({
            latestPrice: this.quotesService.getLatestClosePrice(data),
            quoteSymbol: entry.symbol,
            amount: entry.amount
          });
        })
      })
    });
  }

  addToPortfolio() {
    this.localStorageService.getItem('portfolio').then((item) => {
      const currentPortfolio = item !== null ? JSON.parse(item) : []
      currentPortfolio.push({symbol: 'CGC', amount: 123})
      localStorage.removeItem('portfolio');
      this.localStorageService.setItem('portfolio', JSON.stringify(currentPortfolio));
      this.generateData();
    });
  }
}
