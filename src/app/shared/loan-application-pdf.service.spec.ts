import { TestBed } from '@angular/core/testing';

import { LoanApplicationPdfService } from './loan-application-pdf.service';

describe('LoanApplicationPdfService', () => {
  let service: LoanApplicationPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanApplicationPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
