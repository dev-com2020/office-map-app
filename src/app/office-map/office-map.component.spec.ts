import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeMapComponent } from './office-map.component';

describe('OfficeMapComponent', () => {
  let component: OfficeMapComponent;
  let fixture: ComponentFixture<OfficeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfficeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
