import { TestBed } from '@angular/core/testing';

import { AppraisalPdfService } from './appraisal-pdf.service';

describe('AppraisalPdfService', () => {
  let service: AppraisalPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppraisalPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
