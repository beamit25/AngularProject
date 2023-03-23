import { TestBed } from '@angular/core/testing';

import { WalletservicesService } from './walletservices.service';

describe('WalletservicesService', () => {
  let service: WalletservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
