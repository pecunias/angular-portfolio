import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;


  describe('component', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [ DashboardComponent ],
        providers: [PortfolioService, { provide: 'Window', useFactory: (() => { 
          let windowMock: Window = <any>{ innerWidth: 100 };
          return windowMock; 
        }) }]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    describe('breakpoint', () => {
      it('should give correct cols', () => {
        component.MAX_WIDTH_SCREEN = 99;
        component.ngOnInit();
        expect(component.breakpoint).toBe(2);
      });

      it('should give correct cols', () => {
        component.MAX_WIDTH_SCREEN = 101;
        component.ngOnInit();
        expect(component.breakpoint).toBe(2);
      });

      it('should call generatePositions', () => {
        const generatePositionsSpy = spyOn(component, 'generatePositions').and.callFake(() => {});
        component.ngOnInit();
        expect(generatePositionsSpy).toHaveBeenCalled();
      });
    });
    describe('generateBreakPoint', () => {
      it('should return 1 cols', () => {
        expect(component.generateBreakPoint(1, 2)).toBe(1);
      })
      it('should return 2 cols', () => {
        expect(component.generateBreakPoint(2, 1)).toBe(2);
      })
    })
  });
});
