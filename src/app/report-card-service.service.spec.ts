import { TestBed } from '@angular/core/testing';

import { ReportCardServiceService } from './report-card-service.service';

describe('ReportCardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportCardServiceService = TestBed.get(ReportCardServiceService);
    expect(service).toBeTruthy();
  });
});
