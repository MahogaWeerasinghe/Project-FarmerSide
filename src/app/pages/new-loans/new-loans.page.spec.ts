import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewLoansPage } from './new-loans.page';

describe('NewLoansPage', () => {
  let component: NewLoansPage;
  let fixture: ComponentFixture<NewLoansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLoansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewLoansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
