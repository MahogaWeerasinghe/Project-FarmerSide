import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingReasonPage } from './pending-reason.page';

describe('PendingReasonPage', () => {
  let component: PendingReasonPage;
  let fixture: ComponentFixture<PendingReasonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingReasonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingReasonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
