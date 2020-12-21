import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditLoansPage } from './edit-loans.page';

describe('EditLoansPage', () => {
  let component: EditLoansPage;
  let fixture: ComponentFixture<EditLoansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLoansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditLoansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
