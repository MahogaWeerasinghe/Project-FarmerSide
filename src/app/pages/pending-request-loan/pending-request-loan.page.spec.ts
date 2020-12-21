import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingRequestLoanPage } from './pending-request-loan.page';

describe('PendingRequestLoanPage', () => {
  let component: PendingRequestLoanPage;
  let fixture: ComponentFixture<PendingRequestLoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingRequestLoanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingRequestLoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
