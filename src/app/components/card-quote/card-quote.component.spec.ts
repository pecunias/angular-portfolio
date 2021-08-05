import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { IPosition } from 'src/app/models/position.model';

import { CardQuoteComponent } from './card-quote.component';

describe('CardQuoteComponent', () => {
  let component: CardQuoteComponent;
  let fixture: ComponentFixture<CardQuoteComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CardQuoteComponent ],
      providers: [MatDialog, DashboardComponent]
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
});
