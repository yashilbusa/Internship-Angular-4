import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPlaceholderComponent } from './box-placeholder.component';

describe('BoxPlaceholderComponent', () => {
  let component: BoxPlaceholderComponent;
  let fixture: ComponentFixture<BoxPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
