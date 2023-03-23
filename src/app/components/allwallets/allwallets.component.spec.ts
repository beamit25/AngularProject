import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllwalletsComponent } from './allwallets.component';

describe('AllwalletsComponent', () => {
  let component: AllwalletsComponent;
  let fixture: ComponentFixture<AllwalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllwalletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllwalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
