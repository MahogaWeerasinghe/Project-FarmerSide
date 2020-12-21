import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApprovedRequestViewPage } from './approved-request-view.page';

describe('ApprovedRequestViewPage', () => {
  let component: ApprovedRequestViewPage;
  let fixture: ComponentFixture<ApprovedRequestViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedRequestViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovedRequestViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
