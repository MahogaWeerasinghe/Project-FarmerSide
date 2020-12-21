import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingRequestsPage } from './pending-requests.page';

describe('PendingRequestsPage', () => {
  let component: PendingRequestsPage;
  let fixture: ComponentFixture<PendingRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingRequestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
