import { TestBed, inject } from '@angular/core/testing';

import { ProductsGarudService } from './products-garud.service';

describe('ProductsGarudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsGarudService]
    });
  });

  it('should be created', inject([ProductsGarudService], (service: ProductsGarudService) => {
    expect(service).toBeTruthy();
  }));
});
