import { Injectable } from '@angular/core';
import { IPosition } from 'src/app/models/position.model';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { QuotesService } from '../quotes/quotes.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public quotes: IPosition[] = []
  public positions: IPosition[] = [];

  constructor(private localStorageService: LocalStorageService, private quotesService: QuotesService) { }

  addToPortfolio(position: IPosition): Promise<void> {
    return this.localStorageService.getItem('portfolio').then((item) => {
      const currentPortfolio = item !== null ? JSON.parse(item) : []
      currentPortfolio.push(position)
      localStorage.removeItem('portfolio');
      this.localStorageService.setItem('portfolio', JSON.stringify(currentPortfolio));
    })
  }

  removeFromPortfolio(position: IPosition): Promise<void> {
    return this.localStorageService.getItem('portfolio').then((item) => {
      const currentPortfolio = item !== null ? JSON.parse(item) : []
      let updatedPortfolio = currentPortfolio.filter((item: IPosition) => {
        return item.id !== position.id
      })
      localStorage.removeItem('portfolio');
      this.localStorageService.setItem('portfolio', JSON.stringify(updatedPortfolio));
    })
  }

  getPortfolio(): Promise<any> {
    return this.localStorageService.getItem('portfolio').then((item) => {
      this.quotes = item !== null ? JSON.parse(item) : []
      this.positions = [];

      this.quotes.forEach((entry: IPosition) => {
        this.quotesService.getQuote(entry.symbol).subscribe((data) => {
          this.positions.push({
            id: entry.id,
            latestPrice: this.quotesService.getLatestClosePrice(data),
            symbol: entry.symbol,
            amount: entry.amount
          });
        })
      })
      return this.positions;
    });
  }
}
