import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitChildComponent } from './init-child.component';

describe('InitChildComponent', () => {
  let component: InitChildComponent;
  let fixture: ComponentFixture<InitChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
