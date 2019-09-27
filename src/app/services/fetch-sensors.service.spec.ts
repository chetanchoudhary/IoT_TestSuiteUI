import { TestBed } from '@angular/core/testing';

import { FetchSensorsService } from './fetch-sensors.service';

describe('FetchSensorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchSensorsService = TestBed.get(FetchSensorsService);
    expect(service).toBeTruthy();
  });
});
