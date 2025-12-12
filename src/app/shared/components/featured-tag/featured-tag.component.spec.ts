import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTagComponent } from './featured-tag.component';

describe('FeaturedTagComponent', () => {
  let component: FeaturedTagComponent;
  let fixture: ComponentFixture<FeaturedTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
