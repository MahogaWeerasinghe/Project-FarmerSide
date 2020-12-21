import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObtainLoansPage } from './obtain-loans.page';

describe('ObtainLoansPage', () => {
  let component: ObtainLoansPage;
  let fixture: ComponentFixture<ObtainLoansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtainLoansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObtainLoansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
