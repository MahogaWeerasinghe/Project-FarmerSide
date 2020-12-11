import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirequestPage } from './airequest.page';

describe('AirequestPage', () => {
  let component: AirequestPage;
  let fixture: ComponentFixture<AirequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
