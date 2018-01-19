import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePhoneComponent } from './purchase-phone.component';

describe('PurchasePhoneComponent', () => {
  let component: PurchasePhoneComponent;
  let fixture: ComponentFixture<PurchasePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
