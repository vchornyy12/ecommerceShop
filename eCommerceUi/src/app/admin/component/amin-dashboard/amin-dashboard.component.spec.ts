import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminDashboardComponent } from './amin-dashboard.component';

describe('AminDashboardComponent', () => {
  let component: AminDashboardComponent;
  let fixture: ComponentFixture<AminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AminDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
