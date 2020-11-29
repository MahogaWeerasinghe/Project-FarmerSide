import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentdetailsPage } from './paymentdetails.page';

describe('PaymentdetailsPage', () => {
  let component: PaymentdetailsPage;
  let fixture: ComponentFixture<PaymentdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
