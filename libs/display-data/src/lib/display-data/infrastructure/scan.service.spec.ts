import { TestBed } from '@angular/core/testing';

import { ScanRepository } from './scan.repository';

describe('ScanService', () => {
    let service: ScanRepository;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ScanRepository);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
