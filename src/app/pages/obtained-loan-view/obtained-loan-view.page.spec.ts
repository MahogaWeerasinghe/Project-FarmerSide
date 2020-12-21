import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObtainedLoanViewPage } from './obtained-loan-view.page';

describe('ObtainedLoanViewPage', () => {
  let component: ObtainedLoanViewPage;
  let fixture: ComponentFixture<ObtainedLoanViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtainedLoanViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObtainedLoanViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
