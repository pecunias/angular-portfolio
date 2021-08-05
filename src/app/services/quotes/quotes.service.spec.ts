import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { QuotesService } from './quotes.service';

describe('QuotesService', () => {
  let injector: TestBed;
  let service: QuotesService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuotesService]
    });
    injector = getTestBed();
    service = injector.get(QuotesService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  afterEach(() => {
    httpMock.verify();
  });
});
