import { TestBed, inject } from '@angular/core/testing';

import { IasGeneratorService } from './ias-generator.service';

describe('IasGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IasGeneratorService]
    });
  });

  it('should be created', inject([IasGeneratorService], (service: IasGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
