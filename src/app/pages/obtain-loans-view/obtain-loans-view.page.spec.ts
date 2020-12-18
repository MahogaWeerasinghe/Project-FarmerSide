import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObtainLoansViewPage } from './obtain-loans-view.page';

describe('ObtainLoansViewPage', () => {
  let component: ObtainLoansViewPage;
  let fixture: ComponentFixture<ObtainLoansViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtainLoansViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObtainLoansViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
