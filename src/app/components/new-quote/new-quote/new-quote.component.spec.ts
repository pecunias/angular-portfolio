import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { NewQuoteComponent } from './new-quote.component';

describe('NewQuoteComponent', () => {
  let component: NewQuoteComponent;
  let fixture: ComponentFixture<NewQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[MatDialogModule, HttpClientTestingModule],
      declarations: [ NewQuoteComponent ],
      providers: [PortfolioService, DashboardComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
