import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoandetailsPage } from './loandetails.page';

describe('LoandetailsPage', () => {
  let component: LoandetailsPage;
  let fixture: ComponentFixture<LoandetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoandetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoandetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
