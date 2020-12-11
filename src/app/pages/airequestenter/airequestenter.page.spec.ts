import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirequestenterPage } from './airequestenter.page';

describe('AirequestenterPage', () => {
  let component: AirequestenterPage;
  let fixture: ComponentFixture<AirequestenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirequestenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirequestenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
