import { TestBed } from '@angular/core/testing';

import { FetchStudentServiceService } from './fetch-student-service.service';

describe('FetchStudentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchStudentServiceService = TestBed.get(FetchStudentServiceService);
    expect(service).toBeTruthy();
  });
});
