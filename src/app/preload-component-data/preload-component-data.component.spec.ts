import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadComponentDataComponent } from './preload-component-data.component';

describe('PreloadComponentDataComponent', () => {
  let component: PreloadComponentDataComponent;
  let fixture: ComponentFixture<PreloadComponentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreloadComponentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadComponentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
