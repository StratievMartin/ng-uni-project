import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdDetailsComponent } from './job-ad-details.component';

describe('JobAdDetailsComponent', () => {
  let component: JobAdDetailsComponent;
  let fixture: ComponentFixture<JobAdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
