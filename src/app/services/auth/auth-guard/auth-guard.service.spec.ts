import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from '../auth.service';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
        JwtModule.forRoot({ // for JwtHelperService
          config: {
            tokenGetter: () => {
              return '';
            }
          }
        })],
      providers: [AuthService, AuthGuardService]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
