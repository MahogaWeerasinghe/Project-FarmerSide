import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanviewsPage } from './loanviews.page';

describe('LoanviewsPage', () => {
  let component: LoanviewsPage;
  let fixture: ComponentFixture<LoanviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
