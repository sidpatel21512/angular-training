import { TestBed } from '@angular/core/testing';

import { PreloadComponentDataResolverService } from './preload-component-data-resolver.service';

describe('PreloadComponentDataResolverService', () => {
  let service: PreloadComponentDataResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadComponentDataResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
