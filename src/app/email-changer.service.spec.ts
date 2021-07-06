import { TestBed } from '@angular/core/testing';

import { EmailChangerService } from './email-changer.service';

describe('EmailChangerService', () => {
  let service: EmailChangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailChangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
