import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApprovedRequestsPage } from './approved-requests.page';

describe('ApprovedRequestsPage', () => {
  let component: ApprovedRequestsPage;
  let fixture: ComponentFixture<ApprovedRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedRequestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovedRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
