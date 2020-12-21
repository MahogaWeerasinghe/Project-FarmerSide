import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentConfirmPage } from './payment-confirm.page';

describe('PaymentConfirmPage', () => {
  let component: PaymentConfirmPage;
  let fixture: ComponentFixture<PaymentConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
