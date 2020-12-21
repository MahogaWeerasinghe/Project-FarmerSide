import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingRequestViewPage } from './pending-request-view.page';

describe('PendingRequestViewPage', () => {
  let component: PendingRequestViewPage;
  let fixture: ComponentFixture<PendingRequestViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingRequestViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingRequestViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
