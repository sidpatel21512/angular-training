import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewCheckedComponent } from './after-view-checked.component';

describe('AfterViewCheckedComponent', () => {
  let component: AfterViewCheckedComponent;
  let fixture: ComponentFixture<AfterViewCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterViewCheckedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterViewCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
