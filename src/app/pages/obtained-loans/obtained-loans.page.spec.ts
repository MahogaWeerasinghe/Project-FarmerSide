import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObtainedLoansPage } from './obtained-loans.page';

describe('ObtainedLoansPage', () => {
  let component: ObtainedLoansPage;
  let fixture: ComponentFixture<ObtainedLoansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtainedLoansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObtainedLoansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
