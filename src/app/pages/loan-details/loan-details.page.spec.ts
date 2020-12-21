import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanDetailsPage } from './loan-details.page';

describe('LoanDetailsPage', () => {
  let component: LoanDetailsPage;
  let fixture: ComponentFixture<LoanDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
