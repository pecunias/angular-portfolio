import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let injector: TestBed;
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        JwtModule.forRoot({ // for JwtHelperService
          config: {
            tokenGetter: () => {
              return '';
            }
          }
        })],
      providers: [AuthService, JwtHelperService]
    });
    injector = getTestBed();
    service = injector.get(AuthService);
    httpMock = injector.get(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
