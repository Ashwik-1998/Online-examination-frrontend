import { TestBed } from '@angular/core/testing';

import { GetStudentServiceService } from './get-student-service.service';

describe('GetStudentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStudentServiceService = TestBed.get(GetStudentServiceService);
    expect(service).toBeTruthy();
  });
});
