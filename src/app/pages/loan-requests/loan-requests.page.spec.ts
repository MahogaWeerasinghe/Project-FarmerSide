import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanRequestsPage } from './loan-requests.page';

describe('LoanRequestsPage', () => {
  let component: LoanRequestsPage;
  let fixture: ComponentFixture<LoanRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRequestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
