import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNewsComponent } from './custom-news.component';

describe('CustomNewsComponent', () => {
  let component: CustomNewsComponent;
  let fixture: ComponentFixture<CustomNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
