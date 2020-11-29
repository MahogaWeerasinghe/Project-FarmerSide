import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgrirequestsPage } from './agrirequests.page';

describe('AgrirequestsPage', () => {
  let component: AgrirequestsPage;
  let fixture: ComponentFixture<AgrirequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrirequestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgrirequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
