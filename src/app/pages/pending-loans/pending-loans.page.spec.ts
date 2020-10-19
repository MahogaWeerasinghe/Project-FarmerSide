import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingLoansPage } from './pending-loans.page';

describe('PendingLoansPage', () => {
  let component: PendingLoansPage;
  let fixture: ComponentFixture<PendingLoansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingLoansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingLoansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
