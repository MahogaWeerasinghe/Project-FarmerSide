import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApprovedRequestLoanPage } from './approved-request-loan.page';

describe('ApprovedRequestLoanPage', () => {
  let component: ApprovedRequestLoanPage;
  let fixture: ComponentFixture<ApprovedRequestLoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedRequestLoanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovedRequestLoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
