import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RejecteddetailsPage } from './rejecteddetails.page';

describe('RejecteddetailsPage', () => {
  let component: RejecteddetailsPage;
  let fixture: ComponentFixture<RejecteddetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejecteddetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RejecteddetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
