import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { IPosition } from 'src/app/models/position.model';

import { CardQuoteComponent } from './card-quote.component';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

describe('CardQuoteComponent', () => {
  let component: CardQuoteComponent;
  let fixture: ComponentFixture<CardQuoteComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CardQuoteComponent ],
      providers: [MatDialog, DashboardComponent, PortfolioService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const data: IPosition = {symbol: 'GME', amount: 123, id: '1', 'changed': 'higher'};
    fixture = TestBed.createComponent(CardQuoteComponent);
    component = fixture.componentInstance;
    component.data = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('deletePosition', () => {
    it(`should call removeFromPortfolio from portfolioService 
        and then call generatePositions from dashboardComponent`, () => {
          let mockData = null as any;
          let portfolioService = TestBed.get(PortfolioService);
          spyOn(portfolioService, 'removeFromPortfolio').and.returnValue({
            // fake the promise!
            then(callback: any) {
              callback();
            }
          });

          let dashboardComponent = TestBed.get(DashboardComponent);
          let generatePositionsSpy = spyOn(dashboardComponent, 'generatePositions').and.callFake(() => {});

          component.deletePosition(mockData);
          expect(portfolioService.removeFromPortfolio).toHaveBeenCalled();
          expect(generatePositionsSpy).toHaveBeenCalled();
        });   
  })
});
