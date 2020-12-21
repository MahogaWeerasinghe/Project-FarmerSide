import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewRequestLoanPage } from './new-request-loan.page';

describe('NewRequestLoanPage', () => {
  let component: NewRequestLoanPage;
  let fixture: ComponentFixture<NewRequestLoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRequestLoanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewRequestLoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
