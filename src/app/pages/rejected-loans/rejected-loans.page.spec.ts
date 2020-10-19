import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RejectedLoansPage } from './rejected-loans.page';

describe('RejectedLoansPage', () => {
  let component: RejectedLoansPage;
  let fixture: ComponentFixture<RejectedLoansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedLoansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RejectedLoansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
