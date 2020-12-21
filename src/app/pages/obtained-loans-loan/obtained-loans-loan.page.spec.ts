import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObtainedLoansLoanPage } from './obtained-loans-loan.page';

describe('ObtainedLoansLoanPage', () => {
  let component: ObtainedLoansLoanPage;
  let fixture: ComponentFixture<ObtainedLoansLoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtainedLoansLoanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObtainedLoansLoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
