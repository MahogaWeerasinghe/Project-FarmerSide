import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewstatusPage } from './viewstatus.page';

describe('ViewstatusPage', () => {
  let component: ViewstatusPage;
  let fixture: ComponentFixture<ViewstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
